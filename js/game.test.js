import test from "node:test"
import assert from "node:assert/strict"
import { totalCalc } from "./game.js"

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


