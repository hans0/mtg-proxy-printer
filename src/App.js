import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';


import TestCardDisplay from './components/TestCardDisplay';
import SingleCardGet from './components/SingleCardGet';
import ProxyList from './components/ProxyList';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' >
            <ProxyList />
          </Route>
          <Route path='/single'>
            <SingleCardGet />
          </Route>
          <Route path='/test'>
            <TestCardDisplay />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
