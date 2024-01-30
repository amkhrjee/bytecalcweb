let buttons = document.querySelectorAll("button")
let firstRowButtons = document.querySelectorAll(".first-row-btn")
let menuOverlayButton = document.querySelector(".menu-overlay-button")
let arrow = document.querySelector(".menu-overlay-button>img")
let hiddenRow = document.querySelector('.hidden-row')
let hiddenRowButton = document.querySelectorAll(".hidden-row-btn")

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
    console.log("Arrow Clicked!");
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
        buttons.forEach(button => {
            button.style.height = "4.6rem"
        })
        toggleArrow = true
    } else {
        hiddenRow.style.display = "none"
        hiddenRow.style.opacity = 0
        hiddenRow.style.transform = "translateY(-50px)"
        buttons.forEach(button => {
            button.style.height = "5.6rem"
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