import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import About from './components/About/About.jsx';
import PostAPI from './components/postAPI/PostAPI.jsx';
import Weather from './components/weather/Weather.jsx';
import WeatherFormik from './components/weatherFormik/weatherFormik.jsx';

function App() {
  return (
    <Router>
      <div className='m-5'>
        <nav>
          <ul className='flex list-none space-x-8 m-4 p-4 no-underline text-white bg-slate-900 w-[600px] rounded'>
            <li className=' hover:underline'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/weatherFormik">WeatherFormik</Link>
            </li>
          </ul>
        </nav>

      
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/post" element={<PostAPI />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weatherFormik" element={<WeatherFormik />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
