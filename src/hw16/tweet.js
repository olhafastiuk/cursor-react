import "./tweet.css";

function Tweet(props) {
  return (
    <div className="tweet line">
      <div className="profile-photo-box">
        <img className="profile-photo" src={props.img} alt="profile-photo" />
      </div>
      <div className="column">
        <div className="top line">
          <div className="line">
            <h2 className="name">{props.name}</h2>
            <p className="nickname">{props.nickname}</p>
            <span className="dot">·</span>
            <p className="date">{props.date}</p>
          </div>
          <svg
            className="dropdown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 426.667 426.667"
          >
            <defs />
            <circle cx="42.667" cy="213.333" r="42.667" />
            <circle cx="213.333" cy="213.333" r="42.667" />
            <circle cx="384" cy="213.333" r="42.667" />
          </svg>
        </div>
        <div className="post">
          <p>{props.post}</p>
          <img src={props.img_post} alt="" />
        </div>
        <div className="bottom line">
          {props.comment}
          {props.repost}
          {props.like}
          <div className="line share">
            <svg
              className="ico"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <defs />
              <path d="M182.461 155.48L232 105.941V368a24 24 0 0048 0V105.941l49.539 49.539a24 24 0 1033.941-33.941l-90.509-90.51a24 24 0 00-33.942 0l-90.509 90.51a24 24 0 1033.941 33.941z" />
              <path d="M464 232a24 24 0 00-24 24v184H72V256a24 24 0 00-48 0v192a40 40 0 0040 40h384a40 40 0 0040-40V256a24 24 0 00-24-24z" />
            </svg>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
