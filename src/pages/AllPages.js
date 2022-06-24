import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Monsters from '../components/Monsters/Monsters';
import SelectedMonster from '../components/SelectedMonster/SelectedMonster';
import Links from '../components/Links/Links';
import './AllPages.css';

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
