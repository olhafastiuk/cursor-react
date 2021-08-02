import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Tweet from "./tweet";
import Users from "./Users";

function App() {
  return (
    <div className="tweets">
      {Users.map(user => (
        <Tweet img={user.img} name={user.name} nickname={user.nickname} date={user.date} post={user.post} img_post={user.img_post} comment={user.comment} repost={user.repost} like={user.like} />
      ))}
    </div>
  );
}

export default App;
