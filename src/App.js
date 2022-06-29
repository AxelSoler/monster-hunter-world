import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Monsters from './components/monsterComponent/Monsters/Monsters';
import Links from './components/Links/Links';
import SelectedMonster from './components/monsterComponent/SelectedMonster/SelectedMonster';
import Armors from './components/armorComponent/Armors/Armors';
import SelectedArmor from './components/armorComponent/SelectedArmor/SelectedArmor';
import SelectedLocation from './components/locationComponent/SelectedLocation/SelectedLocation';
import Locations from './components/locationComponent/Locations/Locations';
import Weapons from './components/weaponComponent/Weapons/Weapons';
import SelectedWeapon from './components/weaponComponent/SelectedWeapon/SelectedWeapon';
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
        <Route path="Location" element={<Locations />} />
        <Route path="Location/:locationname" element={<SelectedLocation />} />
        <Route path="Weapon" element={<Weapons />} />
        <Route path="Weapon/:weaponname" element={<SelectedWeapon />} />
      </Routes>
    </div>
  </div>
);

export default App;
