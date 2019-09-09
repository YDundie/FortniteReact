import React from 'react';
import Navbar from './components/navbar.js';
import Welcome from './components/welcome.js'
import { Route } from "react-router-dom";
import PlayerDataScreen from './screen/PlayerDataScreen'
import StoreDataScreen from './screen/StoreDataScreen'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Welcome />
      <Route path='/player-data' component={PlayerDataScreen} />
      <Route path='/store-data' component={StoreDataScreen} />
    </div >
  );
}

export default App;
