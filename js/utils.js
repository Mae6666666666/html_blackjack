let suitName = {
    "s": "spades",
    "c": "clubs",
    "d": "diamonds",
    "h": "hearts"
}
const suits = ["spades", "clubs", "hearts", "diamonds"]


export function createPathToDisplayCard(inputValue){
    let number = getCardNumValue(inputValue)
    let suit = codeNamesForSuits(inputValue)
    let path = "deck/" + suit + "_" + number + ".png"
    if (number == null || suit == null){
        return "deck/back.png"
    }
    else {
        return path
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
        return suiteFullName
    }
    else{
        return null
    }  
}

export function getRandomCardPath(){
    let suitNum = Math.floor(Math.random() * 4)
    let randomNum = Math.floor(Math.random() * 13) 
    let cardPath = "deck/" + suits[suitNum] + "_" + randomNum.toString() + ".png"
    return cardPath
}