import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "../hw16/tweet";
import "../hw16/hw16.css";
import { addPost } from "./actions/addPost";
import { useState } from "react";
import users from "../hw16/users";

export default function Content() {
  const publication = useSelector((state) => state);
  const dispatch = useDispatch();
  const n = new Date();
  const month = n.getMonth();
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = n.getDate();
  const [newDetails, setNewDetails] = useState({
    img: "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg",
    name: "",
    nickname: "@NASA",
    date: monthArr[month] + " " + day,
    post: "",
    img_post: "",
    comment: 0,
    repost: 0,
    like: 0,
  });
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
            key={post.nickname}
          />
        ))}
      </div>
      <div className="tweets">
        <form onSubmit={() => dispatch(addPost(newDetails))}>
          <input
            type="text"
            placeholder="Create new post"
            onChange={(e) =>
              setNewDetails({
                ...newDetails,
                post: e.target.value,
                like: Math.floor(Math.random() * 100),
                comment: Math.floor(Math.random() * 100),
                repost: Math.floor(Math.random() * 100),
              })
            }
            value={newDetails.post}
          />
          <input
            type="url"
            placeholder="Add image(paste url-link)"
            onChange={(e) =>
              setNewDetails({ ...newDetails, img_post: e.target.value })
            }
            value={newDetails.img_post}
          />
          <select
            value={newDetails.nickname}
            onChange={(e) => {
              setNewDetails({
                ...newDetails,
                nickname: e.target.value,
                img: users.filter((el) => e.target.value === el.nickname)[0]
                  .img,
              });
            }}
          >
            <option>@NASA</option>
            <option>@konstructivizm</option>
            <option>@universal_sci</option>
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}
