let suitName = {
    "s": "spades",
    "c": "clubs",
    "d": "diamonds",
    "h": "hearts"
}

let cardContainer = document.getElementById("card-container")
let hitBtn = document.getElementById("hit-btn")
let randomBtn = document.getElementById("btn1")
let inputBox = document.getElementById("input-box")
let generateBtn = document.getElementById("generate-btn")
let cardImg1 = document.getElementById("card_img1")
const suits = ["spades", "clubs", "hearts", "diamonds"]

hitBtn.addEventListener("click", async () =>{
    console.log("btn pressed hit")
    generateNewCard()
})

function generateNewCard(){
    let newCard = document.createElement("img")
    let randomCardPath = getRandomCardPath()
    newCard.src = randomCardPath
    cardContainer.appendChild(newCard)
}

generateBtn.addEventListener("click", async () => {
    console.log(inputBox.value)
    createPathToDisplayCard()
})

function createPathToDisplayCard(){
    let number = getCardNumValue(inputBox.value)
    let suit = codeNamesForSuits(inputBox.value)
    let path = "deck/" + suit + "_" + number + ".png"
    if (number == null || suit == null){
        displayCard("deck/back.png")
    }
    else {
        displayCard(path)
    }
    

}

function getCardNumValue(inputValue){
    let number = inputValue.slice(1)
    if (number > 12 || number < 0){
        console.log("number out of range")
        return null
    }
    return number
}

function codeNamesForSuits(inputValue){
    let firstLetter = inputValue[0]
    let suiteFullName = suitName[firstLetter]
    if (suiteFullName != undefined){
        console.log(suiteFullName)
        return suiteFullName
    }
    else{
        console.log("Not a suit letter")
        return null
    }
    
}

randomBtn.addEventListener("click", async () =>{
    displayRandomCard()
})

function displayRandomCard(){
    let pathToCard = getRandomCardPath()
    displayCard(pathToCard)
}

function getRandomCardPath(){
    let suitNum = Math.floor(Math.random() * 4)
    let randomNum = Math.floor(Math.random() * 13) 
    let cardPath = "deck/" + suits[suitNum] + "_" + randomNum.toString() + ".png"
    return cardPath
}

function displayCard(cardPath){
    cardImg1.src = cardPath
    // 
}
