import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Food_menu} from './components/food_menu/Food_menu';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Home} from './components/home/Home';

function App() {
  return (
    
    <div className="App-header">
      <Header />
      <Food_menu />
      <Footer />
    </div>
  );
}

export default App;
