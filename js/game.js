export function totalCalc(listOfCards){
    console.log(listOfCards)
    let card = listOfCards[0] 
    // console.log(listOfCards[0])
    // console.log(numberFromValue(card))
    let totalCardValue = 0
    let numberValues = []

    listOfCards.forEach(async (card) => {
        let cardValue = numberFromValue(card)

        cardValue = getRealNumber(cardValue)

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

export function getRealNumber(num){
    if (num > 10){
            num = 10
        }
    return num
}


/*
plan:
1. set a list which has all the number values inside it
2. use the command that finds a 11 in it (includes)
3. if found - 11 from total cards if total is higher than 21

Example  
strAndNum = "s7"
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

export function isBust(hand){
    // gonna see if cards > 21
    var totalHand = totalCalc(hand)
    if (totalHand > 21){
        return true
    }
    else{
        return false
    }
}
/*
Examples
hand = ["h4","d1"]

*/
export function isBlackjack(hand){
    // gonna see if cards = 21

    var totalHand = totalCalc(hand)
    

    if (totalHand == 21 && hand.length == 2){
        var firstCard = hand[0]
        var secondCard = hand[1]
        var numberValue1 = getRealNumber(numberFromValue(firstCard))
        var numberValue2 = getRealNumber(numberFromValue(secondCard))

        if (numberValue1 == 10 && numberValue2 == 1 || numberValue1 == 1 && numberValue2 == 10 ){
            return true
        }
        else{
            return false
        }
    }
    else{
            return false
        }
    
}

export function compareCards(dealerHand, playerHand){
    // gonna see which hand is better
    var dealerTotalCalc = totalCalc(dealerHand)

    var playerTotalCalc = totalCalc(playerHand)
    if (dealerTotalCalc > playerTotalCalc){
        return "Dealer"
    }
    else if (dealerTotalCalc == playerTotalCalc){
        return "Draw"
    }
    else{
        return "Player"
    }
}

export function buildDeck(){
    let deck = []
    let suits = ["h", "d", "s", "c"]
    for(let i = 0; i < 13; i ++){
        suits.forEach((suit) => {
            deck.push(suit + i)
        });   
    }
    return deck
}