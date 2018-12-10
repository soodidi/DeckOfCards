import React, { Component } from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import Actions from './components/Actions/Actions';
import CardsWrapper from './components/CardsWrapper/CardsWrapper';
import { cardsGenerator, shuffleArray } from './utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      selectedCard: null,
    };

    this.shuffle = this.shuffle.bind(this);
    this.dealOneCard = this.dealOneCard.bind(this);
  }

  componentDidMount() {
    this.setState({ cards: cardsGenerator() });
  }

  shuffle() {
    this.setState({ cards: shuffleArray(this.state.cards) });
  }

  dealOneCard() {
    if (this.state.cards.length) {
      const selectedCard = this.state.cards[0];
      const newCardsDeck = this.state.cards.slice(1);
      this.setState({ selectedCard: selectedCard, cards: newCardsDeck});  
    }
  }

  render() {
    const state = { ...this.state };

    return (
      <div className="App">
        <AppHeader />
        <section>
          <CardsWrapper cards={state.cards} selectedCard={state.selectedCard} />
          <Actions cards={state.cards} onClickShuffle={this.shuffle} onClickPick={this.dealOneCard}/>
        </section>
      </div>
    );
  }
}

export default App;
