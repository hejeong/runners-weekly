export default (state = { blogs: [], authors: [], target: "" }, action) => {
    switch(action.type){
        case "REQUEST_BLOG_DATA":
            return state;
        case "RECEIVE_BLOG_DATA":
            return Object.assign({}, state, { blogs: action.data.posts, authors: action.data.authors})
        case "ADD_NEW_BLOG_DATA":
            return Object.assign({}, state, { 
                blogs: [...state.blogs, {
                    ...action.postData.post
                }],
                authors: [
                    ...state.authors,
                    {
                        [state.authors.length+1]: action.postData.author
                    }
                ]
        })
        case "GET_SPECIFIC_BLOG":
            const found = state.blogs.find(function(post){
                return post.id === action.postID
            })
            const author = state.authors[found.id-1];
            return Object.assign({}, state, {target: { post: found, author: Object.values(author)[0]}})
        case "RESET_TARGET":
            return Object.assign({}, state, {target: ""})
        default:
            return state
    }
}

