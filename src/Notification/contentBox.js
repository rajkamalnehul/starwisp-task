import React from 'react';
import './NotificationComponent.css';

import ContentItem from './ContentItem';

export default function ContentBox(){
    return(
        <div className='content-box'>
            <ContentItem icon='pink' title='Admin' desc='Your faculty uploaded the syllabus.' time='3' divider={true}/>
            <ContentItem icon='blue' title='Student' desc='Your faculty uploaded the syllabus.' time='3' divider={true}/>
            <ContentItem icon='purple' title='Teacher' desc='Your faculty uploaded the syllabus.' time='3' divider={true}/>
            <ContentItem icon='yellow' title='Admin' desc='Your faculty uploaded the syllabus.' time='3' divider={true}/>
            <ContentItem icon='yellow' title='Admin' desc='Your faculty uploaded the syllabus.' time='3' divider={true}/>
            <ContentItem icon='yellow' title='Admin' desc='Your faculty uploaded the syllabus.' time='3'/>
            <div className='view-all-btn'>
                <p className='view-all-btn-text'>View all</p>
            </div>
        </div>
    )
}