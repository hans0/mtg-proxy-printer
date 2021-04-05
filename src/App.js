import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// import Card from './components/Card';
// import DFCard from './components/DFCard';

import TestCardDisplay from './components/TestCardDisplay';
import SingleCardGet from './components/SingleCardGet';
// import { cards } from './testData';

function App() {

  // console.log(cards);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' >
            <TestCardDisplay />
          </Route>
          <Route path='/single'>
            <SingleCardGet />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
