import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Monsters from './components/Monsters/Monsters';
import SelectedMonster from './components/SelectedMonster/SelectedMonster';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Monsters />} />
          <Route path="Monster/:monstername" element={<SelectedMonster />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
