# Deck

52 playing card images plus a card back, named for easy programmatic access.

## Naming

`<suit>_<index>.png` where suit is `hearts`, `diamonds`, `clubs` or `spades`
and index runs 0–12:

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Card | A | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | J | Q | K |

So `hearts_0.png` is the ace of hearts and `spades_12.png` is the king of spades.

The card back is `back.png`.

## Building a deck in Python

```python
SUITS = ["hearts", "diamonds", "clubs", "spades"]
NAMES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

deck = [
    {"suit": suit, "rank": i, "name": f"{NAMES[i]} of {suit}", "image": f"deck/{suit}_{i}.png"}
    for suit in SUITS
    for i in range(13)
]
```

## Sizes

All images are 226 x 314 px PNGs. Each card has a white body with a black
rounded border; only the area outside the rounded corners is transparent.

## Licence

Public domain, from [deckofcardsapi.com](https://deckofcardsapi.com/). No
attribution required.
