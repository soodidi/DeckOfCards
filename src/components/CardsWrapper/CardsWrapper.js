import React from 'react';
import './CardsWrapper.scss';
import Card from '../../shared-components/Card/Card'

export default function CardsWrapper(props) {
  let selectedCard;

  if (props.selectedCard) {
      selectedCard = <Card card={props.selectedCard}></Card>
  } else {
    selectedCard = <div>Please pick a card</div>
  }

  return (
    <div className="cards-wrapper">
        {selectedCard}
        <div className="card-number"><span className="number">{props.cards.length}</span> are still on the deck !</div>
    </div>
  );
}
