let buttons = document.querySelectorAll("button")
let firstRowButtons = document.querySelectorAll(".first-row-btn")
let menuOverlayButton = document.querySelector(".menu-overlay-button")
let arrow = document.querySelector(".menu-overlay-button>img")

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

menuOverlayButton.addEventListener("click", () => {
    console.log("Arrow Clicked!");
    let currentAngle = (parseFloat(arrow.style.transform.replace(/[^0-9\-.,]/g, '')) || 0);
    let rotationAngle = 180
    if ("vibrate" in navigator)
        navigator.vibrate(200)
    arrow.style.transform = "rotate(" + (currentAngle + rotationAngle) + "deg)"
    initialAngle = rotationAngle
})