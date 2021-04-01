import DFCard from './DFCard';
import { cards } from './testData';

const TestCardDisplay = (props) => {
  console.log(cards);
  return(
    <>
    {props.cards.map((c) => 
      {c.dfname ? <DFCard card={c} /> : <Card card={c} /> }
    )}
    </>
  );
}

export default TestCardDisplay;