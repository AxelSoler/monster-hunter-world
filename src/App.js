import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Games from './components/Monsters/Monsters';

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
    </div>
  );
}

export default App;
