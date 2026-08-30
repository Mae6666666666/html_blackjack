import test from "node:test"
import assert from "node:assert/strict"
import { totalCalc, isBust, isBlackjack, compareCards, buildDeck } from "./game.js"

/*
A card is written as suit letter + deck index, matching the image files in deck/.
The index runs 0-12, so it is one behind the card it stands for:

    d0  = ace of diamonds     -> 1 or 11
    d2  = 3 of diamonds       -> 3
    d9  = 10 of diamonds      -> 10
    d10 = jack                -> 10
    d11 = queen               -> 10
    d12 = king                -> 10

An ace counts 11 whenever that keeps the hand at 21 or under, otherwise 1.
*/

test("totalCalc. Checking for the correct total", () => {
    assert.equal(totalCalc(["d2", "d8"]), 12)
})

test("totalCalc sums the values of every card in the list", () => {
    assert.equal(totalCalc(["d2", "s11", "h4"]), 18)
})

test("totalCalc. Checking whether Ace should be 1 or 11, needs to be 11", () => {
    assert.equal(totalCalc(["d0", "d10"]), 21)
})

test("totalCalc. Ace needs to be 1 in this", () => {
    assert.equal(totalCalc(["d0", "d10", "h10"]), 21)
})


// --- cases we had not covered yet ---

test("totalCalc. An empty hand is worth nothing", () => {
    assert.equal(totalCalc([]), 0)
})

test("totalCalc. A lone ace is 11", () => {
    assert.equal(totalCalc(["d0"]), 11)
})

test("totalCalc. Two aces are 11 + 1, not 11 + 11", () => {
    // 22 would already be bust, so only the first ace can be the big one.
    assert.equal(totalCalc(["d0", "s0"]), 12)
})

test("totalCalc. Three aces are 11 + 1 + 1", () => {
    assert.equal(totalCalc(["d0", "s0", "h0"]), 13)
})

test("totalCalc. An ace drops to 1 when a later card would bust the hand", () => {
    // ace + 6 is a soft 17, then the 10 would make 27, so the ace becomes 1.
    assert.equal(totalCalc(["d0", "d5", "d9"]), 17)
})

test("totalCalc. The order of the cards does not change the total", () => {
    // Same three cards as above, ace dealt last instead of first.
    assert.equal(totalCalc(["d9", "d5", "d0"]), 17)
})

test("totalCalc. Jack, queen and king are all worth 10", () => {
    assert.equal(totalCalc(["d10", "d11", "d12"]), 30)
})

test("totalCalc. The suit makes no difference to the value", () => {
    assert.equal(totalCalc(["c3", "h3"]), totalCalc(["d3", "s3"]))
})

test("totalCalc. A hand with no ace is allowed to go bust", () => {
    // Nothing to demote here, so the total stays over 21.
    assert.equal(totalCalc(["d9", "h9", "s4"]), 25)
})


//isbust() check over 21

test("isBust. Check if over 21", () =>{
    // should be 25
    assert.equal(isBust(["d9", "h9", "s4"]), true)
})

test("isBust. Check if over 21", () =>{
    // should be 20
    assert.equal(isBust(["d9", "h9"]), false)
})

test("isBust. Check if over 21", () =>{
    // should be 21
    assert.equal(isBust(["d9", "h9", "s0"]), false)
})

test("isBust. Check if over 21", () =>{
    // should be 22
    assert.equal(isBust(["d9", "h9", "s1"]), true)
})

test("isBust. Check if over 21", () =>{
    // should be 5
    assert.equal(isBust(["d2", "h1"]), false)
})



// isBlackjack() check if cards equal Blackjack

test("isBlackjack. Check if == 21", () => {
    // should be ten ace
    assert.equal(isBlackjack(["d9", "h0"]), true)
})

test("isBlackjack. Check if == 21", () => {
    // should be ace ten
    assert.equal(isBlackjack(["h0", "h9"]), true)
})

test("isBlackjack. Check if == 21", () => {
    // should be jack ace
    assert.equal(isBlackjack(["h0", "c10"]), true)
})

test("isBlackjack. Check if == 21", () => {
    // should be queen ace
    assert.equal(isBlackjack(["h0", "s11"]), true)
})

test("isBlackjack. Check if == 21", () => {
    // should be king ace 
    assert.equal(isBlackjack(["h0", "s12"]), true)
})

test("isBlackjack. Check if == 21", () => {
    // should be 2, 9, and 10 (not Blackjack)
    assert.equal(isBlackjack(["h1", "s8", "s9"]), false)
})

test("isBlackjack. Check if == 21", () => {
    // should be 14, not Blackjack
    assert.equal(isBlackjack(["h5", "s7"]), false)
})

// compareCards(), compares the dealer's and player's hand

test("compareCards. Check which hand is closest to 21", () => {
    // Dealer is first argument, should be dealer
    assert.equal(compareCards(["h5", "s7"], ["h2", "d2"]), "Dealer")
})

test("compareCards. Check which hand is closest to 21", () => {
    // Dealer is first argument, should be draw
    assert.equal(compareCards(["h5", "s7"], ["c5", "d7"]), "Draw")
})

test("compareCards. Check which hand is closest to 21", () => {
    // Dealer is first argument, should be Player
    assert.equal(compareCards(["h5", "s7"], ["h0", "d9"]), "Player")
})


// buildDeck() builds a full deck of cards, ready to be dealt from

test("buildDeck. A new deck holds 52 cards", () => {
    assert.equal(buildDeck().length, 52)
})

test("buildDeck. The deck contains the ace of diamonds", () => {
    assert.ok(buildDeck().includes("d0"))
})

test("buildDeck. The deck holds all 13 hearts", () => {
    let hearts = buildDeck().filter(card => card[0] === "h")
    assert.equal(hearts.length, 13)
})

test("buildDeck. The deck holds 13 of each suit", () => {
    let deck = buildDeck()
    assert.equal(deck.filter(card => card[0] === "d").length, 13)
    assert.equal(deck.filter(card => card[0] === "s").length, 13)
    assert.equal(deck.filter(card => card[0] === "h").length, 13)
    assert.equal(deck.filter(card => card[0] === "c").length, 13)
})
