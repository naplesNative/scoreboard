let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function home(x=0){
    homeScore += x
    homeEl.textContent = homeScore
    checkScore()
}

function guest(x=0){
    guestScore += x
    guestEl.textContent = guestScore
    checkScore()
}

function newGame(){
    homeScore = 0
    guestScore = 0
    home()
    guest()
}


function checkScore(){
   
    if(homeScore > guestScore){
        document.getElementById("home").style.color = "yellow"
        document.getElementById("guest").style.color = "white"
    }else if(guestScore > homeScore){
        document.getElementById("guest").style.color = "yellow"
        document.getElementById("home").style.color = "white"
    }else{
        document.getElementById("guest").style.color = ""
        document.getElementById("home").style.color = ""
    }

}

