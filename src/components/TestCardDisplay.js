import Card from './Card';
import DFCard from './DFCard';
import PWCard from './PWCard';

import { cards } from '../testData';

import '../App.css';


const TestCardDisplay = () => {
  console.log(cards);
  return(
    <div className='test-display'>
      {cards.map((card, index) => 
        card.dfname ? <DFCard key={index} card={card} /> : <Card key={index} card={card} />
      )}
    </div>
  );
}

export default TestCardDisplay;