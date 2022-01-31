import './BackToTopButton.scss';
import React, {useEffect} from 'react';
import {GrLinkTop} from 'react-icons/gr';

const BackToTopButton = () =>{
    const [visible, setVisible] = React.useState(false);
    let listener: any;
    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrolled > 50) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    })
    return(
        <div className="backToTopButton" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop} >
            <GrLinkTop />
        </div>
    );
}

export default BackToTopButton;