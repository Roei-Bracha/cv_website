import React from "react";
import './AboutMe.scss';
import {config, AboutMeParagraph} from "../../Utils/config";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutMe = ()=>{
    return(
        <div id={"aboutMe"} className={"aboutMe"}>
            <PageTitle title={"About me"} subTitle={"Why you should hire me"}/>
            <div className={"card"}>
                <div className={"image"}>

                </div>
                <div className={"content"}>
                    {config.aboutMe.map((paragraph : AboutMeParagraph, index:number)=>(
                        <div key={`paragraph-${index}`} className={"paragraph"}>
                            <div className={"title"}>
                                {paragraph.title}
                            </div>
                            <div className={"text"}>
                                {paragraph.text}
                            </div>
                            <div className={"list"}>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe