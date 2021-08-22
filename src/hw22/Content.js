import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "../hw16/tweet";
import "../hw16/hw16.css";
import { addPost } from "./actions/addPost";
import { useState } from "react";
import users from "../hw16/users";
import { Flex, H1, Input, Select, StyledForm, Submit } from "./Style";

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
    name: "NASA",
    nickname: "@NASA",
    date: monthArr[month] + " " + day,
    post: "",
    img_post: "",
    comment: 0,
    repost: 0,
    like: 0,
  });
  return (
    <Flex direction="column-reverse">
      <div className="tweets">
        {publication.map((post) => (
          <Tweet
            img={post.img}
            name={post.name}
            nickname={post.nickname}
            date={post.date}
            post={post.post}
            img_post={post.img_post}
            comment={
              <div className={
                  post.isComment ? "line comment commented" : "line comment"
                }
                onClick={() => {
                  post.isComment = !post.isComment;
                  post.isComment ? post.comment++ : post.comment--;
                  dispatch(addPost([]));
                }}>
                <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
                <p>{post.comment}</p>
              </div>
            }
            repost={
              <div
                className={
                  post.isRepost ? "line repost reposted" : "line repost"
                }
                onClick={() => {
                  post.isRepost = !post.isRepost;
                  post.isRepost ? post.repost++ : post.repost--;
                  dispatch(addPost([]));
                }}
              >
                <svg
                  className="ico"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -91 512 512"
                >
                  <defs />
                  <path d="M512 250.644531l-79.796875 79.671875-80.363281-80.03125 28.210937-28.328125 31.871094 31.738281V60.082031c.035156-5.277343-1.996094-10.246093-5.71875-13.992187-3.757813-3.785156-8.777344-5.867188-14.128906-5.867188H176.84375L136.699219.242188h255.375c16.082031 0 31.171875 6.277343 42.492187 17.667968 11.265625 11.34375 17.417969 26.382813 17.332032 42.363282V254.15625L483.75 222.351562zM327.960938 290.09375H119.925781c-5.355469 0-10.371093-2.082031-14.128906-5.863281-3.722656-3.746094-5.753906-8.71875-5.71875-13.996094V76.621094l31.871094 31.738281 28.210937-28.328125L79.796875 0 0 79.675781l28.25 28.289063 31.851562-31.800782v193.878907c-.085937 15.980469 6.066407 31.023437 17.332032 42.363281 11.320312 11.390625 26.410156 17.667969 42.492187 17.667969h255.375L335.15625 290.09375zm0 0" />
                </svg>
                <p>{post.repost}</p>
              </div>
            }
            like={
              <div
                className={post.isLike ? "line like liked" : "line like"}
                onClick={() => {
                  post.isLike = !post.isLike;
                  post.isLike ? post.like++ : post.like--;
                  dispatch(addPost([]));
                }}
              >
                <svg
                  className="ico"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.001 512"
                >
                  <defs />
                  <path d="M256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125C16.136719 236.808594 0 197.171875 0 153.871094c0-42.070313 14.425781-80.882813 40.617188-109.292969C67.121094 15.832031 103.488281 0 143.03125 0c29.554688 0 56.621094 9.34375 80.445312 27.769531C235.5 37.070312 246.398438 48.453125 256 61.730469c9.605469-13.277344 20.5-24.660157 32.527344-33.960938C312.351562 9.34375 339.417969 0 368.972656 0c39.539063 0 75.910156 15.832031 102.414063 44.578125C497.578125 72.988281 512 111.800781 512 153.871094c0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zM143.03125 29.992188c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
                </svg>
                <p>{post.like}</p>
              </div>
            }
            key={post.nickname}
          />
        ))}
      </div>
      <div className="tweets">
        <StyledForm onSubmit={() => dispatch(addPost(newDetails))}>
          <H1>Create new post</H1>
          <Input
            padding="20px 0"
            margin="10px"
            type="text"
            placeholder="What's happening?"
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
          <Flex justify="space-between">
            <Input
              padding="0"
              border="none"
              width="80%"
              type="url"
              placeholder="Add image(paste url-link)"
              onChange={(e) =>
                setNewDetails({ ...newDetails, img_post: e.target.value })
              }
              value={newDetails.img_post}
            />
            <Select
              value={newDetails.nickname}
              onChange={(e) => {
                setNewDetails({
                  ...newDetails,
                  nickname: e.target.value,
                  img: users.filter((el) => e.target.value === el.nickname)[0]
                    .img,
                  name: users.filter((el) => e.target.value === el.nickname)[0]
                    .name,
                });
              }}
            >
              <option>@NASA</option>
              <option>@konstructivizm</option>
              <option>@universal_sci</option>
            </Select>
          </Flex>
          <Flex justify="flex-end" align="center">
            <Submit type="submit" value="Post" />
          </Flex>
        </StyledForm>
      </div>
    </Flex>
  );
}
