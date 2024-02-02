const buttons = document.querySelectorAll(".input-grid-wrapper>*")
const firstRowButtons = document.querySelectorAll(".first-row-btn")
const menuOverlayButton = document.querySelector(".menu-overlay-button")
const arrow = document.querySelector(".menu-overlay-button>img")
const hiddenRow = document.querySelector('.hidden-row')
const hiddenRowButton = document.querySelectorAll(".hidden-row-btn")
const inputGridWrapper = document.querySelector('.input-grid-wrapper')
const menuButton = document.querySelector(".menu>img")
const listMenu = document.querySelector(".list")

// vibration durations
const smallVibration = 75
const tinyVibration = 50

buttons.forEach(button => {
    button.addEventListener('click', () => {
        Haptics.vibrate(smallVibration)
        button.style.borderRadius = "10%"
        setTimeout(() => {
            button.style.borderRadius = "50%"
        }, 200)
    })
})

firstRowButtons.forEach(button => {
    button.addEventListener('click', () => {
        Haptics.vibrate(smallVibration)
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
    Haptics.vibrate(smallVibration)
    arrow.style.transform = "rotate(" + (currentAngle + rotationAngle) + "deg)"
    initialAngle = rotationAngle

    // toggle display hidden menu
    if (!toggleArrow) {
        hiddenRow.style.display = "grid"
        setTimeout(() => {
            hiddenRow.style.opacity = 1
        }, 100)
        hiddenRow.style.transform = "translateY(0)"
        inputGridWrapper.style.gap = "0px auto"
        inputGridWrapper.style.height = "80%"
        inputGridWrapper.style.transform = "translateY(5.5rem)"
        // buttons.forEach(button => {
        //     // button.style.height = "80%"
        // })
        toggleArrow = true
    } else {
        hiddenRow.style.display = "none"
        hiddenRow.style.opacity = 0
        hiddenRow.style.transform = "translateY(-50px)"
        inputGridWrapper.style.transform = "translateY(0)"
        inputGridWrapper.style.gap = "1rem auto"
        inputGridWrapper.style.height = "100%"


        // buttons.forEach(button => {
        //     button.style.height = "95%"
        // })
        toggleArrow = false
    }
})

hiddenRowButton.forEach(button => {
    button.addEventListener("click", () => {
        Haptics.vibrate(smallVibration)
        button.style.borderRadius = "0px"
        setTimeout(() => {
            button.style.borderRadius = "16px"
        }, 200)
    })
})

let listToggle = false
menuButton.addEventListener("click", () => {
    Haptics.vibrate(tinyVibration)
    if (!listToggle) {
        listMenu.style.visibility = "visible"
        listMenu.style.opacity = 1
        listMenu.style.transform = "translateY(0)"
        listToggle = true
    } else {
        listMenu.style.opacity = 0
        listMenu.style.transform = "translateY(-50px)"
        setTimeout(() => {
            listMenu.style.visibility = "hidden"
        }, 100)
        listToggle = false
    }
})

document.querySelector(".wrapper").addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) {
        listMenu.style.opacity = 0
        listMenu.style.transform = "translateY(-50px)"
        setTimeout(() => {
            listMenu.style.visibility = "hidden"
        }, 100)
        listToggle = false
    }
})