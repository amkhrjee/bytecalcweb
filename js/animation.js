const buttons = document.querySelectorAll("button")
const firstRowButtons = document.querySelectorAll(".first-row-btn")
const menuOverlayButton = document.querySelector(".menu-overlay-button")
const arrow = document.querySelector(".menu-overlay-button>img")
const hiddenRow = document.querySelector('.hidden-row')
const hiddenRowButton = document.querySelectorAll(".hidden-row-btn")
const inputGridWrapper = document.querySelector('.input-grid-wrapper')
const menuButton = document.querySelector(".menu>img")
const listMenu = document.querySelector(".list")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if ("vibrate" in navigator)
            navigator.vibrate(500)
        button.style.borderRadius = "10%"
        setTimeout(() => {
            button.style.borderRadius = "50%"
        }, 200)
    })
})

firstRowButtons.forEach(button => {
    button.addEventListener('click', () => {
        if ("vibrate" in navigator)
            navigator.vibrate(200)
        button.style.backgroundColor = "var(--primary-color)"
        setTimeout(() => {
            button.style.backgroundColor = "white"
        }, 500)
    })
})

let toggleArrow = false
menuOverlayButton.addEventListener("click", () => {
    let currentAngle = (parseFloat(arrow.style.transform.replace(/[^0-9\-.,]/g, '')) || 0);
    let rotationAngle = 180
    if ("vibrate" in navigator)
        navigator.vibrate(200)
    arrow.style.transform = "rotate(" + (currentAngle + rotationAngle) + "deg)"
    initialAngle = rotationAngle

    // toggle display hidden menu
    if (!toggleArrow) {
        hiddenRow.style.display = "grid"
        setTimeout(() => {
            hiddenRow.style.opacity = 1
        }, 100)
        hiddenRow.style.transform = "translateY(0)"
        inputGridWrapper.style.transform = "translateY(5.5rem)"
        buttons.forEach(button => {
            button.style.height = "5rem"
        })
        toggleArrow = true
    } else {
        hiddenRow.style.display = "none"
        hiddenRow.style.opacity = 0
        hiddenRow.style.transform = "translateY(-50px)"
        inputGridWrapper.style.transform = "translateY(0)"
        buttons.forEach(button => {
            button.style.height = "6rem"
        })
        toggleArrow = false
    }
})

hiddenRowButton.forEach(button => {
    button.addEventListener("click", () => {
        if ("vibrate" in navigator)
            navigator.vibrate(200)
        button.style.borderRadius = "0px"
        setTimeout(() => {
            button.style.borderRadius = "16px"
        }, 200)
    })
})

let listToggle = false
menuButton.addEventListener("click", () => {
    console.log("List Clicked!");
    if ("vibrate" in navigator)
        navigator.vibrate(200)
    if (!listToggle) {
        listMenu.style.visibility = "visible"
        listMenu.style.opacity = 1
        // setTimeout(() => {
        // }, 100)
        listMenu.style.transform = "translateY(0)"
        listToggle = true
    } else {
        listMenu.style.opacity = 0
        setTimeout(() => {
            listMenu.style.transform = "translateY(-50px)"
            listMenu.style.visibility = "hidden"
        }, 100)
        listToggle = false
    }
})

document.querySelector(".wrapper").addEventListener("click", (e) => {
    if (!e.target.closest(".menu"))
        listMenu.style.visibility = "hidden"
})