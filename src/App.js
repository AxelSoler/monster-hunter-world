import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Monsters from './components/Monsters/Monsters';
import Links from './components/Links/Links';
import SelectedMonster from './components/SelectedMonster/SelectedMonster';
import Armors from './components/Armors/Armors';
import SelectedArmor from './components/SelectedArmor/SelectedArmor';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="allPages">
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="Monster" element={<Monsters />} />
        <Route path="Monster/:monstername" element={<SelectedMonster />} />
        <Route path="Armor" element={<Armors />} />
        <Route path="Armor/:armorname" element={<SelectedArmor />} />
      </Routes>
    </div>
  </div>
);

export default App;
