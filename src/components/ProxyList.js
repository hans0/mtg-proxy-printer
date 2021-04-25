import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import DFCard from './DFCard';
import { getCard, formatDeckList, getCardsFromDeckList } from '../actions';
import AdvCard from './AdvCard';

const ProxyList = (props) => {
  const [deckListInput, setDeckListInput] = useState([]);
  const [deckListSeparated, setDeckListSeparated] = useState([]);
  const [cardsFromDeckList, setCardsFromDeckList] = useState([]);

  const handleChanges = e => {
    e.preventDefault();
    setDeckListInput(e.target.value);
    console.log(deckListInput);
  }

  const handleClick = () => {
    // props.getCard(cardSearch);
    console.log('Search clicked');
    setDeckListSeparated(formatDeckList(deckListInput));
    // getCardsFromDeckList(deckListSeparated);
    
  }

  useEffect(() => {
    setCardsFromDeckList(
      props.getCardsFromDeckList(deckListSeparated)
    );
  }, [deckListSeparated]);
  


  return (
    <>
    <div className='search-test'>
      Deck Search
        <textarea 
          id='decklist' 
          onChange={handleChanges}
        />
      
        <button onClick={handleClick}>Search</button>
    </div>
    {!cardsFromDeckList ? <>Waiting...</>: <>Here</>}
    {cardsFromDeckList && cardsFromDeckList.map((card) => {
      return <Card key={card.id} card={card} />

    })}
    </>
  )
}

const mapStateToProps = state => {
  return {
    deckListInput: '',
    deckList: []
  }
}

export default connect(mapStateToProps, { getCard, formatDeckList, getCardsFromDeckList })(ProxyList);