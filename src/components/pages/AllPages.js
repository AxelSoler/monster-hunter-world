import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Monsters from '../Monsters/Monsters';
import SelectedMonster from '../SelectedMonster/SelectedMonster';
import Links from '../Links/Links';

const AllPages = () => (
  <div className="allPages">
    <Routes>
      <Route path="/" element={<Links />} />
      <Route path="Monster" element={<Monsters />} />
      <Route path="Monster/:monstername" element={<SelectedMonster />} />
    </Routes>
  </div>
);

export default AllPages;
