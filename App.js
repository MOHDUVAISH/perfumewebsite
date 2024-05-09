import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About'; // Import the Aboutus component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>} /> {/* Define the route for Aboutus */}
        {/* Other routes go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
