// автор, зображення автора, нікнейм автора, дата публікації, 
// текст публікації, зображення публікації, кількість лайків, кількість коментарів, кількість перепостів)

import users from "../../hw16/users";
// const basePosts = [
//     {
//         name:"",
//         photo: "",
//         nickname:"",
//         date:"",
//         text:"",
//         img:"",
//         like:"",
//         comment:"",
//         repost:"",
//     },
//     {
//         name:"",
//         photo: "",
//         nickname:"",
//         date:"",
//         text:"",
//         img:"",
//         like:"",
//         comment:"",
//         repost:"",
//     },
//     {
//         name:"",
//         photo: "",
//         nickname:"",
//         date:"",
//         text:"",
//         img:"",
//         like:"",
//         comment:"",
//         repost:"",
//     },
// ]

const posts = (state = users, action) => {
    switch(action.type) {
        case "add post":
            return state.concat;
        default:
            return state;
    }
}

export default posts;