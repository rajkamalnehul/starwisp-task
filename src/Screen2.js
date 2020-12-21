/** @format */

import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import "./Screen2.css";
import { IconButton, Button } from "@material-ui/core";
import attachment from "../src/assets/attachment.png";
import arrow from "../src/assets/arrow.png";
import Post from "./Post";

function Screen2() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const handlePost = () => {
    setPost([...post, input]);
    console.log(post);
    setInput("");
  };
  const handleCancle = () => {
    setInput("");
  };
  return (
    <div className="screen2">
      <SideNavBar />
      <div className="screen2_content_container">
        <div className="inputOuterbox">
          <div className="inputInnerbox">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share something with your class.."
            />
          </div>
          <div className="inputOuterbox_buttons_container">
            <div className="left_button_container">
              <Button onClick={handleCancle}>Cancle</Button>
            </div>
            <div className="right_button_container">
              <IconButton>
                <img src={attachment} alt="attachment"></img>
              </IconButton>
              <div className="splitbutton">
                <Button onClick={handlePost}>Share</Button>
                <div className="arrowButton">
                  <button>
                    <img src={arrow} alt="arrow"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {post.map((posttext) => (
          <Post post={posttext} />
        ))}
      </div>
    </div>
  );
}

export default Screen2;
