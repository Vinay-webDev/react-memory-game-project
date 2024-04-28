import React, {useState} from 'react';
import './App.css'
import SingleCard from './SingleCard.jsx';

const cardImages = [
  {"src": "/img/burger.png"},
  {"src": "/img/cheese.png"},
  {"src": "/img/egg.png"},
  {"src": "/img/eraser.png"},
  {"src": "/img/fries.png"},
  {"src": "/img/helmet.png"},
  {"src": "/img/jadebuddha.png"},
  {"src": "/img/onimask.png"}
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  /* i need a function which will need do three things for us
     ==>> need to duplicate cards
     ==>> need to shuffle them randomly
     ==>> need to give random id */
  // shuffle cards
  function shuffleCards() {
    
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5 )
    .map((card) => ({ ...card, id: Math.random()}))
    
    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <>
      <div className="app" > 
        <h1> 💫magic match💫 </h1>
        <button onClick={shuffleCards} > new game </button> 
        <div className="card-grid" >
          {cards.map( card => ( 
          <SingleCard key={card.id} card={card} /> ))}
        </div>
      </div>
    </>
  )
}

export default App
