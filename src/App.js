import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import DFCard from './components/DFCard';

import TestCardDisplay from './components/TestCardDisplay';

import { cards } from './testData';

function App() {

  // console.log(cards);

  return (
    <div className="App">
      {/* Manually showing card display */}
      
      
      <Card card={cards[0]}/>
      <Card card={cards[1]}/>
      <DFCard card={cards[2]}/>
      <DFCard card={cards[3]}/>
      <DFCard card={cards[4]}/>
     

      {/* <TestCardDisplay /> */}

    </div>
  );
}

export default App;
