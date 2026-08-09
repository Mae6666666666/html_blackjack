import * as utils from "./utils.js"
import * as game from "./game.js"

let cardContainer = document.getElementById("card-container")
let hitBtn = document.getElementById("hit-btn")
let randomBtn = document.getElementById("btn1")
let inputBox = document.getElementById("input-box")
let generateBtn = document.getElementById("generate-btn")
let cardImg1 = document.getElementById("card_img1")


// --- Event Handlers ---
hitBtn.addEventListener("click", async () =>{
    console.log("btn pressed hit")
    generateNewCard()
    utils.test()
})

generateBtn.addEventListener("click", async () => {
    console.log(inputBox.value)
    let path = utils.createPathToDisplayCard(inputBox.value)
    displayCard(path)
})

randomBtn.addEventListener("click", async () =>{
    displayRandomCard()
    let cardList = ["d2", "s11", "h4"]
    let totalScore = game.totalCalc(cardList)
    console.log(totalScore)
})




// --- Other UI Functions ---

function generateNewCard(){
    let newCard = document.createElement("img")
    let randomCardPath = utils.getRandomCardPath()
    newCard.src = randomCardPath
    cardContainer.appendChild(newCard)
}

function displayRandomCard(){
    let pathToCard = utils.getRandomCardPath()
    displayCard(pathToCard)
}

function displayCard(cardPath){
    cardImg1.src = cardPath
}


// --- Game Functions ---

