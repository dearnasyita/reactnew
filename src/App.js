import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Product judul="mobil" harga ="Rp.3000"/>    
           <Product judul="hape" harga ="Rp.1000"/>
           <Product judul="anu" harga ="Rp.10000"/>
           <Product judul="laptop" harga ="Rp.2000"/>
        </header>
      </div>
    );
  }
}

export default App;
