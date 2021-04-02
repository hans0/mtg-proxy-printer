import Card from './Card';
import DFCard from './DFCard';
// import PWCard from './PWCard';

import { cards } from '../testData';

import '../App.css';


const TestCardDisplay = () => {
  console.log(cards);
  return(
    <div className='App'>
      {cards.map((card, index) => 
        card.dfname ? <DFCard key={card.name} card={card} /> : <Card key={card.name} card={card} />
      )}
    </div>
  );
}

export default TestCardDisplay;