export function totalCalc(listOfCards){
    console.log(listOfCards)
    let card = listOfCards[0] 
    // console.log(listOfCards[0])
    // console.log(numberFromValue(card))
    let totalCardValue = 0
    let numberValues = []

    listOfCards.forEach(async (card) => {
        let cardValue = numberFromValue(card)

         if (cardValue > 10){
            cardValue = 10
        }

        if (cardValue == 1 && totalCardValue + 11 <= 21){
            cardValue = 11
        }
        numberValues.push(cardValue)
        totalCardValue += cardValue

        console.log(cardValue)
    });

    if(numberValues.includes(11) && totalCardValue > 21){
        totalCardValue -= 10
    }
    return totalCardValue
    
}
/*
plan:
1. set a list which has all the number values inside it
2. use the command that finds a 11 in it (includes)
3. if found - 11 from total cards if total is higher than 21
*/

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

