import './Resume.scss';
import React from 'react';
import { Chrono } from "react-chrono";

const Resume = () =>{
    const items = [
        {
            title: '2016-2019 8200 Unit',
            cardTitle: "Full Stack Team leader",
        },
        {
            title: '2019-2020 Otorio',
            cardTitle: "Full Stack Developer",
        },
        {
            title: '2020-2023 B.Sc. Computer Science',
            cardTitle: "B.Sc. in computer Science and Data Science – Ben Gurion University - GPA:86.2",
        },
        {
            title: '2020-2022 Google Development Students Club',
            cardTitle:"DSC Lead",
        }
    ];
    return (
        <div className={"Resume"} id={"resume"}>
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                hideControls
                allowDynamicUpdate
                disableClickOnCircle
                theme={{
                    primary: 'black',
                    secondary: "transparent",
                }}
                scrollable={false}
            >
                <div className={"resumeCardContent"} id={"8200"}>
                    <ul>
                        <li>Team leader, a commander of three full stack developers.</li>
                        <li>Created web apps to automate time-wasting processes resulting in reduction of work time from 4 hours down to 40 minutes.</li>
                        {/*<li>Implemented various Validation Controls for form validation and implemented custom validation controls using Object Oriented JavaScript</li>*/}
                        <li>Received a certificate of excellence for professional achievements and remarkable personal competencies.</li>
                        <li>Mentor and teach other soldiers code</li>
                    </ul>
                </div>
                <div id={"otorio"}>
                    <ul>
                        <li>Developing a multi-service-based cybersecurity application for OT devices in factories around the world.</li>
                        <li>Working on both server-side in Java and Python and Client Side using React and Mobex.</li>
                        <li>Creating JavaScript unit tests using Cypress and ensure front-end code quality.</li>
                    </ul>
                </div>
                <div id={"bsc"}>

                </div>
                <div id={"dsc"}>
                    <ul>
                        <li>2020 - Head of Mobile Development – giving lectures and teaching Flutter.</li>
                        <li>2021 – DSC Lead – Managing the club, organizing meetups and giving lectures to students.</li>
                        <li>Guidance of graduation projects from the Computer Science department.</li>
                    </ul>
                </div>
                <div className="chrono-icons">
                    <img src="/images/resumeTimeline/8200.svg" alt="8200" className={"timelineImage"}/>
                    <img src="/images/resumeTimeline/otorio.png" alt="otorio" className={"timelineImage"}/>
                    <img src="/images/resumeTimeline/bgu.jpeg" alt="bgu" className={"timelineImage"}/>
                    <img src="/images/resumeTimeline/dsc.png" alt="DSC" className={"timelineImage"}/>
                </div>
            </Chrono>
        </div>
    )
}

export default Resume;