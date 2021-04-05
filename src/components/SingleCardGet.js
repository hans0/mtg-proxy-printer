import { useState, useEffect } from 'react';

import Card from './Card';
import getCard from '../api-calls';



const SingleCardGet = () => {
  
  // const [card, setCard] = useState({});

  var card= {};

  useEffect(() => {
    card = getCard('Drown in the Loch');
    console.log(card)
  }, []);
  

  return (
    <div>
      {card.name ? <Card card={card} /> : <></>}
    </div>
  );
}

export default SingleCardGet;