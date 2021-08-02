import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Tweet from "./tweet";

function App() {
  return (
    <div className="tweets">
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default App;
