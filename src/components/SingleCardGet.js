import React, { useState } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import DFCard from './DFCard';
import { getCard } from '../actions';

const SingleCardGet = (props) => {
  const [cardSearch, setCardSearch] = useState('Lurrus, of the Dream Den');

  const { card } = props;

  const handleChanges = e => {
    setCardSearch(e.target.value);
  }

  const handleClick = () => {
    props.getCard(cardSearch);
  }

  return (
    <>
    <div className='search-test'>
      Single Card Get
        <input 
          type='text' 
          value={cardSearch}
          onChange={handleChanges}
        />
      
        <button onClick={handleClick}>Search</button>
    </div>
    {card === null ? 
      <>Searching...</>: 
      card.hasOwnProperty('dfname') ?
        <DFCard key={card.name} card={card} />:
        <Card key={card.name} card={card} />
      
      // <Card key={card.name} card={card} />

      // Attempt 1: breaks for single sided cards
      // card.dfname === null ? 
      //   <Card key={card.name} card={card} />:
      //   <DFCard key={card.name} card={card} />
      
    }
    {/* {card !== null ? <Card key={card.name} card={card} />: null} */}
    </>
  )

}

const mapStateToProps = state => {
  return {
    card: state.card,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCard })(SingleCardGet);