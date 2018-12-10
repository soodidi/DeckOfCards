import React from 'react';
import './Button.scss';

export default function Button(props) {

  return (
      <button className={props.disabled ? "button disabled-button" : "button normal-button"} disabled={props.disabled} onClick={props.onClickButton}>{props.label}</button>
  );
}
