import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Pokedex from './Pokedex.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Pokedex />
    </div>  
  );
}

export default App;
