import Card from './Card';
import DFCard from './DFCard';

import { cards } from '../testData';

import '../App.css';


const TestCardDisplay = () => {
  console.log(cards);
  return(
    <div>
      {cards.map((card, index) => 
        card.dfname ? <DFCard key={index} card={card} /> : <Card key={index} card={card} />
        // Boolean(c.dfname) ? <DFCard card={c} /> : <Card card={c} />
        // console.log(Boolean(c.dfname));
      
        // {
        //   !c.dfname ? <DFCard card={c} /> : <Card card={c} /> 
        // }
      )}
      
    </div>
  );
}

export default TestCardDisplay;