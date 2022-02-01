import React from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <div className="App">
        <Home/>
        <AboutMe/>
        <BackToTopButton/>
        <Resume/>
    </div>
  );
}

export default App;
