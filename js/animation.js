// Styles
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
import { Interpreter, Parser, Scanner } from "./calculator.js";
// ELements
const outputDisplay = document.querySelector(".output-display");
const buttonsWrapper = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".buttons>*");
const firstRowButtons = document.querySelectorAll(".op-buttons>*");
const hiddenRowButtons = document.querySelectorAll(".hidden-ops>md-filled-button");
const inputArea = document.querySelector(".numinput");
const menuButton = document.querySelector(".menu-btn");
const copyButton = document.querySelector(".output-display-wrapper>md-icon-button");
const toggleButton = document.querySelector("md-filled-tonal-icon-button");
const opButtons = document.querySelector(".op-buttons");
const hiddenOps = document.querySelector(".hidden-ops");
const display = document.querySelector(".display");
const firstRow = document.querySelector(".first-row");
const navDrawer = document.querySelector(".menu");
const supportButton = document.querySelector(".support-btn");
const supportDialog = document.querySelector(".support-dialog");
const supportDialogCloseButton = document.querySelector(".support-dialog-close-btn");
const commitDate = document.querySelector(".commit-date");
const changeThemeButton = document.querySelector(".change-theme-btn");
const themeDialog = document.querySelector(".theme-dialog");
const themeDialogCloseButton = document.querySelector(".theme-dialog-close-btn");
// vibration durations
const smallVibration = 75;
const tinyVibration = 50;
// Theme change mechanism
changeThemeButton.addEventListener("click", () => {
    themeDialog.open = true;
    // Closing  the navDrawer
    [display, firstRow, hiddenOps, buttonsWrapper].forEach((element) => {
        element.style.opacity = "1";
        element.style.filter = "blur(0px)";
    });
    navDrawer.style.transform = "translateX(-70dvw)";
    setTimeout(() => {
        navDrawer.style.visibility = "hidden";
    }, 100);
    isNavDrawerOpen = false;
});
// Update Commit Date
fetch("https://api.github.com/repos/amkhrjee/bytecalcweb/commits?per_page=1")
    .then((res) => res.json())
    .then((commits) => {
    const lastCommitDate = commits[0].commit.author.date;
    const formattedDate = new Date(lastCommitDate).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    commitDate.innerHTML = formattedDate;
})
    .catch((error) => console.error(error));
// Support Button
supportButton.addEventListener("click", () => {
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
    supportDialog.open = true;
});
supportDialogCloseButton.addEventListener("click", () => {
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
    supportDialog.open = false;
});
themeDialogCloseButton.addEventListener("click", () => {
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
    themeDialog.open = false;
});
document.querySelector(".upi-payment").addEventListener("click", () => {
    navigator.clipboard.writeText("aniruddhamukherjee@fbl").then(() => {
        alert("The UPI ID aniruddhamukherjee@fbl has been copied to your clipboard. You can open the UPI app of your choice, paste the UPI ID and pay to my UPI ID. Thanks for your support!");
    });
});
// Navigation Drawer
let isNavDrawerOpen = false;
menuButton.addEventListener("click", () => {
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
    isNavDrawerOpen = true;
    navDrawer.style.visibility = "visible";
    navDrawer.style.transform = "translateX(0)";
    [display, firstRow, hiddenOps, buttonsWrapper].forEach((element) => {
        element.style.opacity = "0.5";
        element.style.filter = "blur(2px)";
    });
});
// Copy Button
copyButton.addEventListener("click", () => {
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
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
    //@ts-ignore
    Haptics.vibrate(tinyVibration);
    if (!isFirstRowHidden) {
        opButtons.style.transform = "translateX(-100dvw)";
        toggleButton.style.transform = "translateX(-85dvw)";
        hiddenOps.style.display = "block";
        setTimeout(() => {
            hiddenOps.style.transform = "translateX(0)";
        }, 50);
        isFirstRowHidden = true;
    }
    else {
        opButtons.style.transform = "translateX(0)";
        toggleButton.style.transform = "translateX(0)";
        hiddenOps.style.transform = "translateX(85dvw)";
        setTimeout(() => {
            hiddenOps.style.display = "none";
        }, 500);
        isFirstRowHidden = false;
    }
});
// Parens
let leftParenPresent = false;
const showOutput = (message, isError) => {
    copyButton.selected = false;
    // copyButton.toggle = true;
    if (String(message).length < 10) {
        outputDisplay.style.fontSize = "2rem";
    }
    else {
        outputDisplay.style.fontSize = "1.5rem";
    }
    if (!isError) {
        outputDisplay.style.color = "var(--md-sys-color-on-secondary-container)";
        outputDisplay.innerHTML = message;
        copyButton.style.display = "block";
    }
    else {
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
    else if (inputArea.value.length > 12)
        inputArea.style.fontSize = "2.5rem";
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
    const newValue = currentValue.substring(0, caretStart) +
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
    const newValue = currentValue.substring(0, caretStart - 1) +
        currentValue.substring(caretEnd);
    inputArea.value = newValue;
    const newCaretPos = caretStart - 1;
    inputArea.setSelectionRange(newCaretPos, newCaretPos);
    copyButton.style.display = "none";
};
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //@ts-ignore
        Haptics.vibrate(tinyVibration);
        button.style.borderRadius = "10px";
        setTimeout(() => {
            button.style.borderRadius = "40px";
        }, 200);
        // populating input
        const value = button.dataset.val;
        if (!isNaN(parseInt(value))) {
            insertTextAtCaret(value);
        }
        else if (value === "backspace") {
            clearAllInput();
        }
        else if (value === "AC") {
            inputArea.value = "";
            inputArea.style.fontSize = "6rem";
            outputDisplay.innerHTML = "";
            copyButton.style.display = "none";
        }
        else if (value === "+" ||
            value === "-" ||
            value === "×" ||
            value === "/" ||
            value === "%" ||
            value === ".") {
            insertTextAtCaret(value);
        }
        else if (value === "parens") {
            if (leftParenPresent) {
                insertTextAtCaret(")");
                leftParenPresent = false;
            }
            else {
                insertTextAtCaret("(");
                leftParenPresent = true;
            }
        }
        else if (value === "=") {
            let scanner = new Scanner(inputArea.value);
            let resultTokens = scanner.scanTokens();
            let parser = new Parser(resultTokens);
            try {
                let expression = parser.parse();
                let interpreter = new Interpreter();
                let result = interpreter.interpret(expression);
                showOutput(result.toString(), false);
            }
            catch (error) {
                showOutput(error.message, true);
            }
        }
        updateFontSize();
        focusInputArea();
    });
});
firstRowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //@ts-ignore
        Haptics.vibrate(smallVibration);
        const value = button.dataset.val;
        let newValue = "";
        switch (value) {
            case "log₂":
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
hiddenRowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //@ts-ignore
        Haptics.vibrate(tinyVibration);
        const outputVal = outputDisplay.innerHTML.length && outputDisplay.innerHTML != "Empty Input"
            ? parseFloat(outputDisplay.innerHTML)
            : parseFloat(inputArea.value);
        // functionality
        if (button.dataset.val == "bin") {
            if (outputVal) {
                inputArea.value = "bin(" + outputVal + ")";
                showOutput(outputVal.toString(2), false);
                inputArea.style.fontSize = "3.5rem";
            }
            else
                showOutput("Empty Input", true);
        }
        else if (button.dataset.val == "hex") {
            if (outputVal) {
                inputArea.value = "hex(" + outputVal + ")";
                showOutput(outputVal.toString(16), false);
                inputArea.style.fontSize = "3.5rem";
            }
            else
                showOutput("Empty Input", true);
        }
    });
});
document.body.addEventListener("click", (e) => {
    if (!e.target.closest(".menu") &&
        !e.target.closest(".menu-btn") &&
        isNavDrawerOpen) {
        [display, firstRow, hiddenOps, buttonsWrapper].forEach((element) => {
            element.style.opacity = "1";
            element.style.filter = "blur(0px)";
        });
        navDrawer.style.transform = "translateX(-70dvw)";
        setTimeout(() => {
            navDrawer.style.visibility = "hidden";
        }, 100);
        isNavDrawerOpen = false;
    }
});
const setLightThemeColors = () => {
    const root = document.documentElement;
    root.style.setProperty("--md-sys-color-primary", "hsl(100, 55%, 27%)");
    root.style.setProperty("--md-sys-color-primary-container", "hsl(98, 79%, 77%)");
    root.style.setProperty("--md-sys-color-on-primary", "hsl(0, 0%, 100%)");
    root.style.setProperty("--md-sys-color-secondary", "hsl(95, 13%, 34%)");
    root.style.setProperty("--md-sys-color-secondary-container", "hsl(90, 37%, 85%)");
    root.style.setProperty("--md-sys-color-on-secondary-container", "hsl(100, 41%, 9%)");
    root.style.setProperty("--md-sys-color-tertiary", "hsl(180, 29%, 31%)");
    root.style.setProperty("--md-sys-color-tertiary-container", "hsl(181, 56%, 83%)");
    root.style.setProperty("--md-sys-color-error", "hsl(0, 75%, 42%)");
    root.style.setProperty("--md-sys-color-error-container", "hsl(6, 100%, 92%)");
    root.style.setProperty("--md-sys-color-background", "hsl(84, 29%, 90%)");
    root.style.setProperty("--md-sys-color-on-surface", "hsl(90, 8%, 10%)");
    root.style.setProperty("--md-sys-color-on-surface-variant", "hsl(90, 7%, 26%)");
    root.style.setProperty("--md-sys-color-surface", "hsl(84, 3%, 36%)");
    root.style.setProperty("--md-sys-color-surface-bright", "hsl(72, 50%, 96%)");
    root.style.setProperty("--md-sys-color-surface-dim", "hsl(72, 12%, 84%)");
    root.style.setProperty("--md-sys-color-surface-container", "hsl(72, 24%, 92%)");
    root.style.setProperty("--md-sys-color-surface-container-lowest", "hsl(0, 0%, 100%)");
    root.style.setProperty("--md-sys-color-surface-container-low", "hsl(72, 33%, 94%)");
    root.style.setProperty("--md-sys-color-surface-container-high", "hsl(72, 19%, 89%)");
    root.style.setProperty("--md-sys-color-surface-container-highest", "hsl(73, 14%, 87%)");
    root.style.setProperty("--md-sys-color-outline", "hsl(85, 5%, 45%)");
    root.style.setProperty("--md-sys-color-outline-variant", "hsl(83, 11%, 76%)");
};
const setDarkThemeColors = () => {
    const root = document.documentElement;
    root.style.setProperty("--md-sys-color-primary", "hsl(98, 52%, 66%)");
    root.style.setProperty("--md-sys-color-primary-container", "hsl(99, 86%, 17%)");
    root.style.setProperty("--md-sys-color-on-primary", "hsl(101, 100%, 14%)");
    root.style.setProperty("--md-sys-color-secondary", "hsl(91, 21%, 74%)");
    root.style.setProperty("--md-sys-color-secondary-container", "hsl(94, 17%, 25%)");
    root.style.setProperty("--md-sys-color-on-secondary-container", "hsl(91, 21%, 74%)");
    root.style.setProperty("--md-sys-color-tertiary", "hsl(181, 34%, 72%)");
    root.style.setProperty("--md-sys-color-tertiary-container", "hsl(180, 44%, 21%)");
    root.style.setProperty("--md-sys-color-error", "hsl(6, 100%, 84%)");
    root.style.setProperty("--md-sys-color-error-container", "hsl(356, 100%, 29%)");
    root.style.setProperty("--md-sys-color-background", "hsl(84, 29%, 90%)");
    root.style.setProperty("--md-sys-color-on-surface", "hsl(60, 11%, 88%)");
    root.style.setProperty("--md-sys-color-on-surface-variant", "hsl(83, 11%, 76%)");
    root.style.setProperty("--md-sys-color-surface", "hsl(90, 18%, 7%)");
    root.style.setProperty("--md-sys-color-surface-bright", "hsl(86, 6%, 21%)");
    root.style.setProperty("--md-sys-color-surface-dim", "hsl(90, 18%, 7%)");
    root.style.setProperty("--md-sys-color-surface-container", "hsl(86, 12%, 12%)");
    root.style.setProperty("--md-sys-color-surface-container-lowest", "hsl(90, 25%, 5%)");
    root.style.setProperty("--md-sys-color-surface-container-low", "hsl(86, 14%, 10%)");
    root.style.setProperty("--md-sys-color-surface-container-high", "hsl(86, 9%, 15%)");
    root.style.setProperty("--md-sys-color-surface-container-highest", "hsl(86, 7%, 20%)");
    root.style.setProperty("--md-sys-color-outline", "hsl(85, 5%, 55%)");
    root.style.setProperty("--md-sys-color-outline-variant", "hsl(90, 7%, 26%)");
};
document.forms["theme"].addEventListener("change", (e) => {
    console.log(e.target.value);
    console.log("In the form!");
    const selectedTheme = e.target.value;
    // change the theme instantly
    switch (selectedTheme) {
        case "light":
            setLightThemeColors();
            break;
        case "dark":
            setDarkThemeColors();
            break;
        case "default":
            if (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setDarkThemeColors();
                break;
            }
            else {
                setLightThemeColors();
                break;
            }
    }
});
