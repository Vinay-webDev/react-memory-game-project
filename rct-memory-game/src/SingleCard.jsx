import './SingleCard.css'

export default function SingleCard( { card }) {
     return(
        <div className="card">
            <div> 
                <img className="front" src={card.src} alt="front-image" />
                <img className="back" src="/img/background3new.jpg" alt="back-image" />
            </div>
        </div>
     );
}












