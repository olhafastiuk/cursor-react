import React from "react";
import { useSelector } from "react-redux";
import Tweet from "../hw16/tweet";
import "../hw16/hw16.css";

export default function Content() {
  const publication = useSelector((state) => state);

  return (
    <div>
      <div className="tweets">
        {publication.map((post) => (
          <Tweet
            img={post.img}
            name={post.name}
            nickname={post.nickname}
            date={post.date}
            post={post.post}
            img_post={post.img_post}
            comment={post.comment}
            repost={post.repost}
            like={post.like}
          />
        ))}
      </div>
    </div>
  );
}
