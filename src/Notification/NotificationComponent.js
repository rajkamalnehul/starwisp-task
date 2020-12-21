/** @format */

import React from "react";
import "./NotificationComponent.css";

import ContentBox from './contentBox';

function NotificationComponent() {
  return (
    <div className="notification-component-wrapper">
      <div className='notification-menu'>
        <div className='menu-item active'>
          <p className='menu-text'>Notification</p>
        </div>
        <div className='menu-item'>
        <p className='menu-text'>Events</p>
        </div>
      </div>
      <ContentBox/>
    </div>
  );
}

export default NotificationComponent;
