import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import DFCard from './components/DFCard';

import { cards } from './testData';

function App() {

  console.log(cards);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Card card={cards[0]}/>
      <Card card={cards[1]}/>
      <DFCard card={cards[2]}/>
      <DFCard card={cards[3]}/>
      <DFCard card={cards[4]}/>
      <Card card={cards[0]}/>

    </div>
  );
}

export default App;
