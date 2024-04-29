import './SingleCard.css'

export default function SingleCard( { card, handleChoice }) {
    /* 8. now we have access to handleChoice 
    /* 4. onClick event should be in back card because later we 
    hide the front card*/
    /* 5. we try to update any choice with this function 
    and we cant directly do that */
    const handleClick = () => {
        handleChoice(card);
    }
     return(
        <div className="card">
            <div> 
                <img className="front" src={card.src} alt="front-image" />
                <img className="back" 
                     src="/img/background3new.jpg" 
                     onClick={handleClick}
                     alt="back-image" />
            </div>
        </div>
     );
}
/* background: hsl(296, 100%, 10%); */











