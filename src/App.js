import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import AllPages from './pages/AllPages';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="*" element={<AllPages />} />
    </Routes>
  </div>
);

export default App;
