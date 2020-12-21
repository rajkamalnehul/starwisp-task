import React from 'react';
import './MainComponent.css';
import DetailsBox from './DetailsBox';
import Graph from '../assets/graph-one.png';

export default function MainComponent(){
    return(
        <div className='main-component-wrapper'>
            <div className='main-component-left'>
                <div className='main-component-heading'>
                Sales Report <span className='heading-month'>September 2020</span>
                </div>
                <div className='graph-section'><img src={Graph} alt='graph'/></div>
            </div>
            <div className='main-component-right'>
                <div className='main-component-date'>17 Sep</div>
                <DetailsBox bg='yellow' heading="$1,204.33" type='Revenue'/>
                <DetailsBox bg='green' heading="33" type='Quotations'/>
            </div>
        </div>
    )
}