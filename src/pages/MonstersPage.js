import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Monsters from '../components/Monsters/Monsters';
import SelectedMonster from '../components/SelectedMonster/SelectedMonster';

const MonstersPage = () => (
  <div className="monsterPage">
    <Routes>
      <Route path="Monster" element={<Monsters />} />
      <Route path="Monster/:monstername" element={<SelectedMonster />} />
    </Routes>
  </div>
);

export default MonstersPage;
