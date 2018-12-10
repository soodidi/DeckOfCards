import React from 'react';
import './Actions.scss';
import Button from '../../shared-components/Button/Button';

export default function Actions(props) {

  return (
    <div className="actions-wrapper">
      <Button disabled={!props.cards.length} label={"Shuffle"} onClickButton={props.onClickShuffle}></Button>
      <Button disabled={!props.cards.length} label={"Pick a card"} onClickButton={props.onClickPick}></Button>
    </div>
  );
}
