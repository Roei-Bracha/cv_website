import PropTypes from "prop-types";
import {ReactNode} from "react";
import './ScrollToButton.scss';
const ScrollToButton = ({targetId,children} : ScrollToButtonProps)=>{
    const scrollTo = (targetId :string)=>{
        const target = document.getElementById(targetId);
        if(target){
            target.scrollIntoView({behavior: 'smooth'});
        }
    }
    return (
        <span className="scrollToButton" onClick={()=>scrollTo(targetId)}>
            {children}
        </span>
    )
}

interface ScrollToButtonProps{
    targetId:string
    children:ReactNode
}

ScrollToButton.prototype = {
    targetId:PropTypes.string.isRequired,
    children:PropTypes.element.isRequired
}


export default ScrollToButton;