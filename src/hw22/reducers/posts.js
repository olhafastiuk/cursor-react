import users from "../../hw16/users";

const posts = (state = users, action) => {
  switch (action.type) {
    case "add post":
      return state.concat(action.newDetails);
    default:
      return state;
  }
};

export default posts;
