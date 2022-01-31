import React from "react";
import ReactTypingEffect from "react-typing-effect";
import './home.scss'

import {config} from "../../Utils/config";
import {NavBar} from "../../components/Navbar/NavBar";

const Home =  () => {
  return (
    <div className={"home"}>
        <NavBar/>
        <div className={"homeBody"}>
            <div className={"content"}>
                <span>Hello I'm <span className={"myNameColor"}>Roei</span></span>
                <ReactTypingEffect className={"typing"} text={config.TypedTitles}/>
                <div className={"buttons"}>
                    <button className={"button hireMeButton"}>
                        Hire Me
                    </button>
                    <button className={"button downloadResumeButton"}>
                        Download Resume
                    </button>
                </div>
            </div>
            <div className={"imageDiv"}>
                <img className={"image"} src={'/images/avatar.jpeg'} alt={""}/>
            </div>
        </div>

    </div>
  );
}

export default Home