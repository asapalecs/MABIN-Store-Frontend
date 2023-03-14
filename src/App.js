import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Store from './pages/Store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={ <Home />} />
            <Route path='contact' element={ <Contact />} />
            <Route path='store' element={ <Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
