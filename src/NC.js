import './App.css';
import React from 'react';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { Neds } from './components/neds_menu/Neds'; 

function NC() {
    return (
      
      <div className="App-header">
        <Header />
        <Neds />
        <Footer />
      </div>
    );
  }
  
  export{NC} ;