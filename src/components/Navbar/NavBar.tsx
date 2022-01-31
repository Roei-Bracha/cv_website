import React from "react";
import './NavBar.scss';
import ScrollToButton from "../ScrollToButton/ScrollToButton";

export function NavBar() {
    return <div className={"navBar"}>
        <div className={"myName"}>Roei Bracha</div>
        <ScrollToButton targetId={"home"}>Home</ScrollToButton>
        <ScrollToButton targetId={"aboutMe"}>About me</ScrollToButton>
        <ScrollToButton targetId={"resume"}>Resume</ScrollToButton>
        <ScrollToButton targetId={"projects"}>Projects</ScrollToButton>
        <ScrollToButton targetId={"contact"}>Contact</ScrollToButton>
    </div>;
}