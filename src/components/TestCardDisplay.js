import Card from './Card';
import DFCard from './DFCard';
import AdvCard from './AdvCard';

import { cards } from '../testData';
import '../App.css';


const TestCardDisplay = () => {

  // function typeOfCard(card){
  //   if (card.advname) {
  //     console.log('adventure!')
  //   }
  //   switch(card){
  //     case card.dfname: 
  //       return <DFCard key={card.name} card={card} />;
  //     default:
  //       return <Card key={card.name} card={card} />;
  //   }
  // }

  console.log(cards);
  return(
    <div className='App'>

      {/* this works */}
      {cards.map((card, index) => {
        return card.dfname ? <><DFCard key={card.name} card={card} /><div className='filler-side' /></> : 
        card.advname ? <><AdvCard key={card.name} card={card} /><div className='filler-side' /></>: <><Card key={card.name} card={card} /><div className='filler-side' /></>
        }
      )}

      {/* {cards.map((card, index) => typeOfCard(card))} */}
      {/* //second attempt 
      {cards.map((card, index) => {
        if (card.dfname){
          console.log('double-side', card)
        }
        switch(card){
          case card.dfname: 
            return(<DFCard key={card.name} card={card} />)
          default:
            return(<Card key={card.name} card={card} />)
        }
      })} */}
      {/*
      {cards.map((card, index) => {
        console.log(card.dfname ? 'double-faced' : 'single-faced')
        switch(card){
          case card.dfname !== null:
            return <DFCard key={card.name} card={card} />
          case card.advname:
            <AdvCard key={card.name} card={card} />
            break;
          default:
            <Card key={card.name} card={card} />
        }
      }
      )}
    */}
    </div>
  );
}

export default TestCardDisplay;