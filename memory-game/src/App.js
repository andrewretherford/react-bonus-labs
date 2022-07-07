import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-hearts_nbvwls.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-diamonds_opxv6b.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-hearts_njmwml.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-diamonds_mpn7sm.png"
  }
];

function App() {
  const [cardState, setCardState] = useState(cards)

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <div>
          <h2 id="instructions">Instructions</h2>
          <p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game
            is to turn over pairs of matching cards.</p>
        </div>
        <div id="message"></div>
        {cardState.map((card, index) => 
          <Card 
            card={card} 
            initImg={'https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png'}  
            key={index}
          />)}
      </main>
    </div>
  );
}

export default App;
