let homeEl = document.querySelector(".home-count")
let guestEl = document.querySelector(".guest-count")

let homeCounter = 0
let guestCounter = 0

function homePlusOne() {
    homeCounter += 1
    homeEl.textContent = homeCounter
    leadingTeam()
}

function homePlusTwo() {
    homeCounter += 2
    homeEl.textContent = homeCounter
    leadingTeam()
}

function homePlusThree() {
    homeCounter += 3
    homeEl.textContent = homeCounter
    leadingTeam()
}

function guestPlusOne() {
    guestCounter += 1
    guestEl.textContent = guestCounter
    leadingTeam()
}

function guestPlusTwo() {
    guestCounter += 2
    guestEl.textContent = guestCounter
    leadingTeam()
}

function guestPlusThree() {
    guestCounter += 3
    guestEl.textContent = guestCounter
    leadingTeam()
}

function leadingTeam() {
    if (homeCounter > guestCounter){
        homeEl.style.color = "rgb(0, 187, 0)"
        guestEl.style.color = "rgb(253, 72, 72)"
    }
    else if (homeCounter < guestCounter){
        homeEl.style.color = "rgb(253, 72, 72)"
        guestEl.style.color = "rgb(0, 187, 0)"
    }
    else {
        homeEl.style.color = "rgb(253, 72, 72)"
        guestEl.style.color = "rgb(253, 72, 72)"
    }
}