import React from 'react';
import './Card.scss';

export default function Card(props) {
  return (
    <div className="card">
      <div>{props.card.sign}</div>
      <div>{props.card.value}</div>
    </div>
  );
}
