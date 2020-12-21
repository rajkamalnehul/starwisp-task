import React from 'react';
import './NotificationComponent.css';

export default function ContentItem(props){
     return(
        <div className={props.divider?'content-item-wrapper divider': 'content-item-wrapper' }>
            <div className={props.icon? props.icon + ' icon-div': 'icon-div'}>
            </div>
            <div className='details-div'>
                <div className='item-title'>{props.title}</div>
                <div className='item-desc'>{props.desc}</div>
                <div className='item-time'>{props.time} minutes ago</div>
            </div>
        </div>
     )
}