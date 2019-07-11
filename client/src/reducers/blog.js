export default (state = { blogs: [], authors: [] }, action) => {
    switch(action.type){
        case "REQUEST_BLOG_DATA":
            return state;
        case "RECEIVE_BLOG_DATA":
            return Object.assign({}, state, { blogs: action.data.posts, authors: action.data.authors})
        default:
            return state
    }
}
