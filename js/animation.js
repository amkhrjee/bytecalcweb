import { Interpreter, Parser, Scanner } from "./calculator.js";
// material-web (https://material-web.dev) imports
import "@material/web/icon/icon.js";
import "@material/web/menu/menu.js";
import "@material/web/menu/menu-item.js";
import "@material/web/button/text-button.js";
import "@material/web/button/filled-button.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import "@material/web/button/elevated-button.js";
import "@material/web/list/list.js";
import "@material/web/list/list-item.js";
import "@material/web/divider/divider.js";
import "@material/web/dialog/dialog.js";
import "@material/web/radio/radio.js";

// ELements
const outputDisplay = document.querySelector(".output-display");
const buttonsWrapper = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".buttons>*");
const firstRowButtons = document.querySelectorAll(".op-buttons>*");
const hiddenRowButton = document.querySelectorAll(".hidden-row-btn");
const inputArea = document.querySelector(".numinput");
const menuButton = document.querySelector(".menu-btn");
const copyButton = document.querySelector(
  ".output-display-wrapper>md-icon-button"
);
const toggleButton = document.querySelector("md-filled-tonal-icon-button");
const opButtons = document.querySelector(".op-buttons");
const hiddenOps = document.querySelector(".hidden-ops");
const display = document.querySelector(".display");
const firstRow = document.querySelector(".first-row");
const navDrawer = document.querySelector(".menu");

// Navigation Drawer
let isNavDrawerOpen = false;
menuButton.addEventListener("click", () => {
  isNavDrawerOpen = true;
  navDrawer.style.visibility = "visible";
  navDrawer.style.transform = "translateX(0)";
  [display, firstRow, hiddenOps, buttonsWrapper].forEach((element) => {
    element.style.opacity = "0.5";
    element.style.filter = "blur(2px)";
    console.log(element);
  });
});

// Copy Button
copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(outputDisplay.innerHTML)
    .then(() => {
      console.log("text added to clipboard");
    })
    .catch(() => {
      console.error("could not add to the clipboard");
    });
});

// Hidden Buttons Transition Animation

let isFirstRowHidden = false;
toggleButton.addEventListener("click", () => {
  if (!isFirstRowHidden) {
    opButtons.style.transform = "translateX(-100dvw)";
    toggleButton.style.transform = "translateX(-85dvw)";
    hiddenOps.style.display = "block";
    setTimeout(() => {
      hiddenOps.style.transform = "translateX(0)";
    }, 50);
    isFirstRowHidden = true;
  } else {
    opButtons.style.transform = "translateX(0)";
    toggleButton.style.transform = "translateX(0)";
    hiddenOps.style.transform = "translateX(85dvw)";
    setTimeout(() => {
      hiddenOps.style.display = "none";
    }, 500);
    isFirstRowHidden = false;
  }
});

// // vibration durations
const smallVibration = 75;
const tinyVibration = 50;

// Parens
let leftParenPresent = false;

const showOutput = (message, isError) => {
  copyButton.selected = false;
  // copyButton.toggle = true;
  if (String(message).length < 10) {
    outputDisplay.style.fontSize = "2rem";
  } else {
    outputDisplay.style.fontSize = "1.5rem";
  }
  if (!isError) {
    outputDisplay.style.color = "var(--md-sys-color-on-secondary-container)";
    outputDisplay.innerHTML = message;
    copyButton.style.display = "block";
  } else {
    outputDisplay.style.color = "var(--md-sys-color-error)";
    outputDisplay.innerHTML = message;
  }
};

// // change input area font
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
  copyButton.style.display = "none";
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    Haptics.vibrate(tinyVibration);
    button.style.borderRadius = "10px";
    setTimeout(() => {
      button.style.borderRadius = "40px";
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
      copyButton.style.display = "none";
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
      if (leftParenPresent) {
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
      try {
        let expression = parser.parse();
        let interpreter = new Interpreter();
        let result = interpreter.interpret(expression);
        console.log(result);
        showOutput(result, false);
      } catch (error) {
        showOutput(error.message, true);
      }
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
        // newValue = "log₂(" + inputArea.value + ")";
        // inputArea.value = newValue;
        insertTextAtCaret("log₂(");
        leftParenPresent = true;
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

// let toggleArrow = false;

// menuOverlayButton.addEventListener("click", () => {
//   let currentAngle =
//     parseFloat(arrow.style.transform.replace(/[^0-9\-.,]/g, "")) || 0;
//   let rotationAngle = 180;
//   Haptics.vibrate(tinyVibration);
//   arrow.style.transform = "rotate(" + (currentAngle + rotationAngle) + "deg)";

//   // toggle display hidden menu
//   if (!toggleArrow) {
//     hiddenRow.style.display = "grid";
//     hiddenRow.style.zIndex = "1";
//     setTimeout(() => {
//       hiddenRow.style.opacity = 1;
//     }, 100);
//     hiddenRow.style.transform = "translateY(0)";
//     inputGridWrapper.style.height = "80%";
//     inputGridWrapper.style.transform = "translateY(5.5rem)";
//     toggleArrow = true;
//   } else {
//     hiddenRow.style.display = "none";
//     hiddenRow.style.zIndex = "-10";
//     hiddenRow.style.opacity = 0;
//     hiddenRow.style.transform = "translateY(-50px)";
//     inputGridWrapper.style.transform = "translateY(0)";
//     inputGridWrapper.style.height = "100%";
//     toggleArrow = false;
//   }
// });

// hiddenRowButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     Haptics.vibrate(smallVibration);
//     button.style.borderRadius = "0px";
//     setTimeout(() => {
//       button.style.borderRadius = "24px";
//     }, 200);

//     const outputVal =
//       outputDisplay.innerHTML.length && outputDisplay.innerHTML != "Empty Input"
//         ? parseFloat(outputDisplay.innerHTML)
//         : parseFloat(inputArea.value);
//     // functionality
//     if (button.dataset.val == "bin") {
//       if (outputVal) {
//         inputArea.value = "BIN(" + outputVal + ")";
//         showOutput(outputVal.toString(2), false);
//         inputArea.style.fontSize = "3.5rem";
//       } else showOutput("Empty Input", true);
//     } else if (button.dataset.val == "hex") {
//       if (outputVal) {
//         inputArea.value = "HEX(" + outputVal + ")";
//         showOutput(outputVal.toString(16), false);
//         inputArea.style.fontSize = "3.5rem";
//       } else showOutput("Empty Input", true);
//     }
//   });
// });

// let listToggle = false;
// menuButton.addEventListener("click", () => {
//   Haptics.vibrate(tinyVibration);
//   if (!listToggle) {
//     listMenu.style.visibility = "visible";
//     listMenu.style.opacity = 1;
//     listMenu.style.transform = "translateY(0)";
//     listToggle = true;
//   } else {
//     listMenu.style.opacity = 0;
//     listMenu.style.transform = "translateY(-50px)";
//     setTimeout(() => {
//       listMenu.style.visibility = "hidden";
//     }, 100);
//     listToggle = false;
//   }
// });

document.body.addEventListener("click", (e) => {
  if (
    !e.target.closest(".menu") &&
    !e.target.closest(".menu-btn") &&
    isNavDrawerOpen
  ) {
    console.log("Clicking outside the menu!");
    [display, firstRow, hiddenOps, buttonsWrapper].forEach((element) => {
      element.style.opacity = 1;
      element.style.filter = "blur(0px)";
    });
    navDrawer.style.transform = "translateX(-70dvw)";
    setTimeout(() => {
      navDrawer.style.visibility = "hidden";
    }, 100);
    isNavDrawerOpen = false;
  }
});

// const openPopUpDialog = () => {
//   popUpDialog.style.visibility = "visible";
//   popUpDialog.style.opacity = "1";
//   document.querySelector(".wrapper").style.opacity = "0.2";
//   document.querySelector(".wrapper").style.filter = "blur(2px)";
// };

// const closePopUpDialog = () => {
//   popUpDialog.style.visibility = "hidden";
//   popUpDialog.style.opacity = "0";
//   document.querySelector(".wrapper").style.opacity = "1";
//   document.querySelector(".wrapper").style.filter = "blur(0px)";

//   // close the list menu
//   listMenu.style.opacity = 0;
//   listMenu.style.transform = "translateY(-50px)";
//   setTimeout(() => {
//     listMenu.style.visibility = "hidden";
//   }, 100);
//   listToggle = false;
// };

// themeOption.addEventListener("click", () => {
//   Haptics.vibrate(tinyVibration);
//   openPopUpDialog();
// });

// const setLightThemeColors = () => {
//   const root = document.documentElement;
//   root.style.setProperty("--primary-color", "#EEF5FF");
//   root.style.setProperty("--secondary-color", "#B4D4FF");
//   root.style.setProperty("--tertiary-color", "#86B6F6");
//   root.style.setProperty("--quaternery-color", "#176B87");
//   root.style.setProperty("--text-color", "#000000");
//   document.body.style.backgroundColor = "#FFF";
//   document.querySelector(".svg-icon").style.filter = "invert(0%)";
//   document.getElementById("downarrow").style.filter = "invert(0%)";
// };

// const setDarkThemeColors = () => {
//   const root = document.documentElement;
//   root.style.setProperty("--primary-color", "#263365");
//   root.style.setProperty("--secondary-color", "#40A2D8");
//   root.style.setProperty("--tertiary-color", "#0B60B0");
//   root.style.setProperty("--quaternery-color", "#000000");
//   root.style.setProperty("--text-color", "#FFF");
//   document.body.style.backgroundColor = "#000000";
//   document.querySelector(".svg-icon").style.filter = "invert(100%)";
//   document.getElementById("downarrow").style.filter = "invert(100%)";
// };

// const currentTheme =
//   window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// const newTheme = null;

// document.forms.theme.addEventListener("change", (e) => {
//   if (e.target.type === "radio") {
//     const selectedTheme = e.target.value;

//     // change the theme instantly
//     const root = document.documentElement;
//     switch (selectedTheme) {
//       case "light":
//         setLightThemeColors();
//         newTheme = "light";
//         break;
//       case "dark":
//         setDarkThemeColors();
//         newTheme = "dark";
//         break;
//       case "default":
//         if (
//           window.matchMedia &&
//           window.matchMedia("(prefers-color-scheme: dark)").matches
//         ) {
//           setDarkThemeColors();
//           newTheme = "dark";
//           break;
//         } else {
//           setLightThemeColors();
//           newTheme = "light";
//           break;
//         }
//     }
//   }
// });

// document.querySelector("input[type='radio']").addEventListener("click", () => {
//   Haptics.vibrate(tinyVibration);
// });

// document
//   .querySelectorAll(".pop-up-buttons>button")[0]
//   .addEventListener("click", () => {
//     Haptics.vibrate(tinyVibration);
//     // Revert back to previous config
//     if (currentTheme == "dark") setDarkThemeColors();
//     else setLightThemeColors();
//     closePopUpDialog();
//   });

// document
//   .querySelectorAll(".pop-up-buttons>button")[1]
//   .addEventListener("click", () => {
//     Haptics.vibrate(tinyVibration);
//     // Save the current config
//     if (newTheme) {
//       if (newTheme != currentTheme) {
//         if (newTheme == "dark") setDarkThemeColors();
//         else setLightThemeColors();
//       } else {
//         // Dont't do anything for  now
//       }
//     }
//     closePopUpDialog();
//   });
