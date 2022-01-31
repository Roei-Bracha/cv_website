import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  return (
    <div className="App">
        <Home/>
        <AboutMe/>
        <BackToTopButton/>
    </div>
  );
}

export default App;
