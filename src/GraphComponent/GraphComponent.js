import React from 'react';
import './GraphComponent.css';
import Graph from '../assets/graph-two.png';

export default function GraphComponent(){
    return(
        <div className='graph-component-wrapper'>
      <img src={Graph} alt='graph'/>
        </div>
    )
}