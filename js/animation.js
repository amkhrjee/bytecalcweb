import { Interpreter, Parser, Scanner } from "./calculator.js";

const listMenu = document.querySelector(".list");
const popUpDialog = document.querySelector(".pop-up");
const menuButton = document.querySelector(".menu>img");
const hiddenRow = document.querySelector(".hidden-row");
const themeOption = document.querySelector(".list>span");
const arrow = document.querySelector(".menu-overlay-button>img");
const outputDisplay = document.querySelector(".text-ouput-display");
const buttons = document.querySelectorAll(".input-grid-wrapper>*");
const firstRowButtons = document.querySelectorAll(".first-row-btn");
const hiddenRowButton = document.querySelectorAll(".hidden-row-btn");
const inputArea = document.querySelector(".text-input-display>input");
const inputGridWrapper = document.querySelector(".input-grid-wrapper");
const menuOverlayButton = document.querySelector(".menu-overlay-button");

// vibration durations
const smallVibration = 75;
const tinyVibration = 50;

// Parens
let leftParenPresent = false;

// change input area font
const updateFontSize = () => {
  if (inputArea.value.length >= 6 && inputArea.value.length <= 9)
    inputArea.style.fontSize = "4.5rem";
  else if (inputArea.value.length > 9 && inputArea.value.length <= 12)
    inputArea.style.fontSize = "3.5rem";
  else if (inputArea.value.length > 12) inputArea.style.fontSize = "2.5rem";
};

// return focus to input area
const focusInputArea = () => {
  if (document.activeElement !== inputArea) {
    inputArea.focus();
  }
};

const insertTextAtCaret = (text) => {
  const caretStart = inputArea.selectionStart;
  const caretEnd = inputArea.selectionEnd;

  const currentValue = inputArea.value;

  const newValue =
    currentValue.substring(0, caretStart) +
    text +
    currentValue.substring(caretEnd);
  inputArea.value = newValue;
  const newCaretPos = caretStart + text.length;
  inputArea.setSelectionRange(newCaretPos, newCaretPos);
};

const clearAllInput = () => {
  const caretStart = inputArea.selectionStart;
  const caretEnd = inputArea.selectionEnd;

  const currentValue = inputArea.value;

  const newValue =
    currentValue.substring(0, caretStart - 1) +
    currentValue.substring(caretEnd);
  inputArea.value = newValue;
  const newCaretPos = caretStart - 1;
  inputArea.setSelectionRange(newCaretPos, newCaretPos);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    Haptics.vibrate(tinyVibration);
    button.style.borderRadius = "10%";
    setTimeout(() => {
      button.style.borderRadius = "32px";
    }, 200);

    // populating input
    const value = button.dataset.val;
    if (!isNaN(value)) {
      insertTextAtCaret(value);
    } else if (value === "backspace") {
      clearAllInput();
    } else if (value === "AC") {
      inputArea.value = "";
      inputArea.style.fontSize = "6rem";
      outputDisplay.innerHTML = "";
    } else if (
      value === "+" ||
      value === "-" ||
      value === "×" ||
      value === "/" ||
      value === "%" ||
      value === "."
    ) {
      insertTextAtCaret(value);
    } else if (value === "parens") {
      if (inputArea.value.length > 0) {
        const newValue = "(" + inputArea.value + ")";
        inputArea.value = newValue;
      } else if (leftParenPresent) {
        insertTextAtCaret(")");
        leftParenPresent = false;
      } else {
        insertTextAtCaret("(");
        leftParenPresent = true;
      }
    } else if (value === "=") {
      let scanner = new Scanner(inputArea.value);
      let resultTokens = scanner.scanTokens();
      let parser = new Parser(resultTokens);
      let expression = parser.parse();
      let interpreter = new Interpreter();
      let result = interpreter.interpret(expression);
      outputDisplay.innerHTML = result;
    }
    updateFontSize();
    focusInputArea();
  });
});

firstRowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    Haptics.vibrate(smallVibration);

    const value = button.dataset.val;
    let newValue = "";
    switch (value) {
      case "log₂":
        newValue = "log₂(" + inputArea.value + ")";
        inputArea.value = newValue;
        break;
      case "2^":
        newValue = "2^(" + inputArea.value + ")";
        inputArea.value = newValue;
        break;
      case "mod":
        insertTextAtCaret("mod");
        break;
      case "^":
        insertTextAtCaret("^");
        break;
    }
    updateFontSize();
    focusInputArea();
  });
});

let toggleArrow = false;

menuOverlayButton.addEventListener("click", () => {
  let currentAngle =
    parseFloat(arrow.style.transform.replace(/[^0-9\-.,]/g, "")) || 0;
  let rotationAngle = 180;
  Haptics.vibrate(tinyVibration);
  arrow.style.transform = "rotate(" + (currentAngle + rotationAngle) + "deg)";

  // toggle display hidden menu
  if (!toggleArrow) {
    hiddenRow.style.display = "grid";
    hiddenRow.style.zIndex = "1";
    setTimeout(() => {
      hiddenRow.style.opacity = 1;
    }, 100);
    hiddenRow.style.transform = "translateY(0)";
    inputGridWrapper.style.height = "80%";
    inputGridWrapper.style.transform = "translateY(5.5rem)";
    toggleArrow = true;
  } else {
    hiddenRow.style.display = "none";
    hiddenRow.style.zIndex = "-10";
    hiddenRow.style.opacity = 0;
    hiddenRow.style.transform = "translateY(-50px)";
    inputGridWrapper.style.transform = "translateY(0)";
    inputGridWrapper.style.height = "100%";
    toggleArrow = false;
  }
});

hiddenRowButton.forEach((button) => {
  button.addEventListener("click", () => {
    Haptics.vibrate(smallVibration);
    button.style.borderRadius = "0px";
    setTimeout(() => {
      button.style.borderRadius = "24px";
    }, 200);
  });
});

let listToggle = false;
menuButton.addEventListener("click", () => {
  Haptics.vibrate(tinyVibration);
  if (!listToggle) {
    listMenu.style.visibility = "visible";
    listMenu.style.opacity = 1;
    listMenu.style.transform = "translateY(0)";
    listToggle = true;
  } else {
    listMenu.style.opacity = 0;
    listMenu.style.transform = "translateY(-50px)";
    setTimeout(() => {
      listMenu.style.visibility = "hidden";
    }, 100);
    listToggle = false;
  }
});

document.body.addEventListener("click", (e) => {
  if (!e.target.closest(".menu")) {
    listMenu.style.opacity = 0;
    listMenu.style.transform = "translateY(-50px)";
    setTimeout(() => {
      listMenu.style.visibility = "hidden";
    }, 100);
    listToggle = false;
  }
});

const openPopUpDialog = () => {
  popUpDialog.style.visibility = "visible";
  popUpDialog.style.opacity = "1";
  document.querySelector(".wrapper").style.opacity = "0.2";
  document.querySelector(".wrapper").style.filter = "blur(2px)";
};

const closePopUpDialog = () => {
  popUpDialog.style.visibility = "hidden";
  popUpDialog.style.opacity = "0";
  document.querySelector(".wrapper").style.opacity = "1";
  document.querySelector(".wrapper").style.filter = "blur(0px)";

  // close the list menu
  listMenu.style.opacity = 0;
  listMenu.style.transform = "translateY(-50px)";
  setTimeout(() => {
    listMenu.style.visibility = "hidden";
  }, 100);
  listToggle = false;
};

themeOption.addEventListener("click", () => {
  Haptics.vibrate(tinyVibration);
  openPopUpDialog();
});

const setLightThemeColors = () => {
  const root = document.documentElement;
  root.style.setProperty("--primary-color", "#EEF5FF");
  root.style.setProperty("--secondary-color", "#B4D4FF");
  root.style.setProperty("--tertiary-color", "#86B6F6");
  root.style.setProperty("--quaternery-color", "#176B87");
  root.style.setProperty("--text-color", "#000000");
  document.body.style.backgroundColor = "#FFF";
  document.querySelector(".svg-icon").style.filter = "invert(0%)";
  document.getElementById("downarrow").style.filter = "invert(0%)";
};

const setDarkThemeColors = () => {
  const root = document.documentElement;
  root.style.setProperty("--primary-color", "#263365");
  root.style.setProperty("--secondary-color", "#40A2D8");
  root.style.setProperty("--tertiary-color", "#0B60B0");
  root.style.setProperty("--quaternery-color", "#000000");
  root.style.setProperty("--text-color", "#FFF");
  document.body.style.backgroundColor = "#000000";
  document.querySelector(".svg-icon").style.filter = "invert(100%)";
  document.getElementById("downarrow").style.filter = "invert(100%)";
};

const currentTheme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
const newTheme = null;

document.forms.theme.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const selectedTheme = e.target.value;

    // change the theme instantly
    const root = document.documentElement;
    switch (selectedTheme) {
      case "light":
        setLightThemeColors();
        newTheme = "light";
        break;
      case "dark":
        setDarkThemeColors();
        newTheme = "dark";
        break;
      case "default":
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          setDarkThemeColors();
          newTheme = "dark";
          break;
        } else {
          setLightThemeColors();
          newTheme = "light";
          break;
        }
    }
  }
});

document.querySelector("input[type='radio']").addEventListener("click", () => {
  Haptics.vibrate(tinyVibration);
});

document
  .querySelectorAll(".pop-up-buttons>button")[0]
  .addEventListener("click", () => {
    Haptics.vibrate(tinyVibration);
    // Revert back to previous config
    if (currentTheme == "dark") setDarkThemeColors();
    else setLightThemeColors();
    closePopUpDialog();
  });

document
  .querySelectorAll(".pop-up-buttons>button")[1]
  .addEventListener("click", () => {
    Haptics.vibrate(tinyVibration);
    // Save the current config
    if (newTheme) {
      if (newTheme != currentTheme) {
        if (newTheme == "dark") setDarkThemeColors();
        else setLightThemeColors();
      } else {
        // Dont't do anything for  now
      }
    }
    closePopUpDialog();
  });
