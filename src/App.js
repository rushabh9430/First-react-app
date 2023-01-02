import React from "react";
// react - rounter - dom is external package so first you install 
// command is => npm i react-router-dom
// and rap out < BrowserRouter> <App /> <BrowserRouter /> in index.js  
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/about";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
