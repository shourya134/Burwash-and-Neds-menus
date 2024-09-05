import './App.css';
import React from 'react';
import {BDH} from './BDH'
import {NC} from './NC'
import { Routes, Route } from 'react-router-dom';
import { DiVim } from 'react-icons/di';

function App() {
  return (
    <div className="App-header">
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route path='/bdh' element={<BDH/>}/>
        <Route path='/nc' element={<NC/>}/>
    </Routes>
    </div>
    

  );
}

export default App;
