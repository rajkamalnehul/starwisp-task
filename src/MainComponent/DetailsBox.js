import React from 'react';
import './MainComponent.css';

export default function DetailsBox(props){
    return(
        <div className={props.bg? props.bg + ' details-box-wrapper':'details-box-wrapper'}>
            <div className='details-box-heading'>{props.heading}</div>
            <div className='details-box-type'>{props.type}</div>
       </div>
    );
}