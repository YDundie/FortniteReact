import React from 'react';
import Navbar from './components/navbar.js';
import { Route } from "react-router-dom";
import PlayerDataScreen from './screen/PlayerDataScreen'
import StoreDataScreen from './screen/StoreDataScreen'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Route path='/player-data' component={PlayerDataScreen} />
      <Route path='/store-data' component={StoreDataScreen} />
    </div >
  );
}

export default App;
