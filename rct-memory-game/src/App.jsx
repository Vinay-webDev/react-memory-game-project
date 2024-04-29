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
  /*2. need a state to check or to store choices of cards to do that*/
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  /* 3. user gonna click on SingleCard component
  so which needs a click event */

  /* 1. i need a function which will need do three things for us
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
  /* 6. to create handleChoice function
  ***remeber this function will takes in card as argument *** */
  function handleChoice(card) {
    //console.log(card);
    /* 9. we could check what ChoiceOne is 
    inside this function,
    ===>>> if it has a value it means it we 
    already have a choice one 
    ===>>> if it doesn't have a value means 
    we don't still don't have choiceOne */
    choiceOne? setChoiceTwo(card) : setChoiceOne(card);
  }
 /* 7. pass in this function as argument to the 
 SingleCard component */
  return (
    <>
      <div className="app" > 
        <h1> 💫magic match💫 </h1>
        <button onClick={shuffleCards} > new game </button> 
        <div className="card-grid" >
          {cards.map( card => ( 
          <SingleCard 
                     key={card.id} 
                     card={card}
                      handleChoice={handleChoice}
                     /> ))}
        </div>
      </div>
    </>
  )
}

export default App














