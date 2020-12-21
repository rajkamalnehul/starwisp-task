import React from 'react';
import './MonthData.css';

export default function MonthData(props){
    return(
        <div className='month-data-card'>
            <div className='month-data-header'>
                {props.heading}
            </div>
            <div className='month-data-content'>
                <div className='month-data-val'>
                    {props.val}
                </div>
                <div className='month-data-graph'>
                    <img src={props.graph} alt='graph'/>
                </div>
            </div>
        </div>
    )
}