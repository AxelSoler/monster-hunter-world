import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Monsters from './components/Monsters/Monsters';
import Links from './components/Links/Links';
import SelectedMonster from './components/SelectedMonster/SelectedMonster';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="allPages">
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="Monster" element={<Monsters />} />
        <Route path="Monster/:monstername" element={<SelectedMonster />} />
      </Routes>
    </div>
  </div>
);

export default App;
