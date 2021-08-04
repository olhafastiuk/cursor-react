import "./hw16.css";

import React from "react";
import Tweet from "./tweet";
import users from "./users";

function Hw16() {
  return (
    <div className="tweets">
      {users.map((user) => (
        <Tweet
          img={user.img}
          name={user.name}
          nickname={user.nickname}
          date={user.date}
          post={user.post}
          img_post={user.img_post}
          comment={user.comment}
          repost={user.repost}
          like={user.like}
        />
      ))}
    </div>
  );
}

export default Hw16;