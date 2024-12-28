import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Header/>,<Home />,<Contact/>]} />
        <Route path="/about" element={[<Header/>,<About />]} />
        <Route path="/contact" element={[<Header/>,<Contact />]} />
      </Routes>
    </Router>
  );
}

export default App;
