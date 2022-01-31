import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss';

const PageTitle = ({title,subTitle} :PageTitleProps )=>{
return (
    <div className={"pageTitle"}>
        <div className={"title"}>{title}</div>
        <div className={"subTitle"}>{subTitle}</div>
        <div className={"line"}/>
    </div>
    )
}

interface PageTitleProps{
    title:string
    subTitle?:string
}

PageTitle.prototype = {
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}

export default PageTitle;