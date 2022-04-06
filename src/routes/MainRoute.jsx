import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  )
}
