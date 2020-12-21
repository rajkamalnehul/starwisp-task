/** @format */

import React from "react";
import "./Screen1.css";
import SideNavBar from "./SideNavBar";
import NotificationComponent from "./Notification/NotificationComponent";
import Inbox from "./Inbox/Inbox";
import Notepad from "./Notepad/Notepad";
import Search from "./Search/Search";
import MainComponent from "./MainComponent/MainComponent";
import MonthData from "./MonthData/MonthData";
import GraphComponent from "./GraphComponent/GraphComponent";

import GraphThree from "./assets/graph-three.png";
import GraphFour from "./assets/graph-four.png";

function Screen1() {
  return (
    <div className="screen1">
      <SideNavBar />

      <div className="screen1_content_container">
        <Search />
        <div className="app-top">
          <div className="app-left">
            <MainComponent />
            <div className="app-left-bottom">
              <Notepad />
              <div>
                <GraphComponent />
                <Inbox />
              </div>
              <div>
                <MonthData
                  heading="This Month"
                  val="+7.8%"
                  graph={GraphThree}
                />
                <MonthData
                  heading="Last Month"
                  val="+67.4%"
                  graph={GraphFour}
                />
              </div>
            </div>
          </div>

          <NotificationComponent />
        </div>
      </div>
    </div>
  );
}

export default Screen1;
