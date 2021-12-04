import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/beers/:id" component={BeerDetails}/>

        <Route exact path="/newBeer" component={NewBeer}/>
        <Route exact path="/randomBeer" component={RandomBeer}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;