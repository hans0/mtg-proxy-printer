import react from 'react';

import '../styles/Card.css'

// import { cards } from '../testData';


const Card = (props) => {

  const lurrusBody = `
    Companion — Each permanent card in your starting deck has converted mana cost 2 or less. (If this card is your chosen companion, you may put it into your hand from outside the game for 3 any time you could cast a sorcery.)
    Lifelink
    \nDuring each of your turns, you may cast one permanent spell with converted mana cost 2 or less from your graveyard.
  `
  const lurrusCardType = 'Legendary Creature - Cat Nightmare';
  const lurrusBodyLine1 = 'Companion — Each permanent card in your starting deck has converted mana cost 2 or less. (If this card is your chosen companion, you may put it into your hand from outside the game for 3 any time you could cast a sorcery.)'
  const lurrusBodyLine2 = 'Lifelink';
  const lurrusBodyLine3 = 'During each of your turns, you may cast one permanent spell with converted mana cost 2 or less from your graveyard.';

  const { card } = props;

  console.log(card);

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-header-name'>
          {/* Lurrus of the Dream Den */}
          {props.card.name}
        </div>
        <div className='card-header-cmc'>
          {props.card.cmc}
        </div>
      </div>
      <div className='card-body'>
        <div className='card-body-type'>
          {props.card.type}
        </div>
        {props.card.body.map((line) => 
          <div className='card-body-line'>
            {line}
          </div>
        )}
      </div>
      {/* Leaving this in helps with layout for non-creature cards */}
      <div className='card-power-toughness'>
        {props.card.pt ? props.card.pt : props.card.loyalty}
      </div>
    </div>
  );
}

export default Card;