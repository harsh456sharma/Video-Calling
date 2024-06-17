import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components.jsx/Home';
import Room from './components.jsx/Room';
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:id" element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
