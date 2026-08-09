export function totalCalc(listOfCards){
    console.log(listOfCards)
    let card = listOfCards[0] 
    // console.log(listOfCards[0])
    // console.log(numberFromValue(card))
    let totalCardValue = 0

    listOfCards.forEach(async (card) => {
        let cardValue = numberFromValue(card)
        totalCardValue += cardValue
        console.log(cardValue)
    });
    return totalCardValue
    
}

function numberFromValue(strAndNum){
    let onlyNum = Number(strAndNum.slice(1)) + 1
    return onlyNum 
}


// export function getCardNumValue(inputValue){
//     for (let i = 0; i < cardList.length; i++){
//         let number = inputValue.slice(1)
//         if (number > 12 || number < 0){
//             console.log("number out of range")
//             return null
//         }
//         return number
//     }
// }

