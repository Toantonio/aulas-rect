import React, { Component } from 'react';

import './App.css';
import HelloWorld from './components/HelloWorld';
import NavB from './components/nav';
import SayMyName from './components/SyMyname';
import MyName from './components/text';
class App extends Component {
  render() {
    const name = 'Antonio'
    const newname = name.toUpperCase()
    //const url = 'https://via.placeholder.com/300.png/09f/fff'
    function sam(a,b){
      return a + b
    }
    return (
      <div className="App">
        <NavB />
        <h1>Meu Primeiro App</h1>
        <p>Alterando jsx</p>
        <p>Olá {newname}</p>
        <MyName nome='Antonio'/>
        <HelloWorld />
        <SayMyName />
        <SayMyName nome='Maria'/>
        <p>soma: {sam(1, 2)}</p>
        <img src='{url}' alt='minha imagem'/>
      </div>
    );
  }
}

export default App;
