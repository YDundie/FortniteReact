import React from 'react';
import Navbar from './components/navbar.js';
import Welcome from './components/welcome.js'
import { Route, Redirect } from "react-router-dom";
import PlayerDataScreen from './screen/PlayerDataScreen'
import StoreDataScreen from './screen/StoreDataScreen'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Welcome />
      <Route exact path="/" render={() => (<Redirect to="/player-data" />)} />
      <Route path='/player-data' component={PlayerDataScreen} />
      <Route path='/store-data' component={StoreDataScreen} />
    </div >
  );
}

export default App;
