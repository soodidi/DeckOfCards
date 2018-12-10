const cardSigns = ['clubs', 'diamonds', 'spades', 'hearts'];
const cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

export function cardsGenerator() {
  const cards = [];
  cardSigns.map((cardSign) => {
    return cardValues.map((card) => {
      return cards.push({ sign: cardSign, value: card });
    });
  });

  return cards;
}

export function shuffleArray(cardDeck) {
  const newCardArray = cardDeck.slice(0);
  for (var i = newCardArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newCardArray[i];
      newCardArray[i] = newCardArray[j];
      newCardArray[j] = temp;
  }
  return newCardArray;
}
