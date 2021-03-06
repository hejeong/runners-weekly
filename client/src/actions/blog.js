export const requestBlogData = () => {
    return {
        type: "REQUEST_BLOG_DATA"
    }
}

export const getSpecificBlog = (postID) => {
    return {
        type: "GET_SPECIFIC_BLOG",
        postID
    }
}

export const resetTargetBlog= () => {
    return {
        type: "RESET_TARGET"
    }
}

export const receiveBlogData = (blogData) => {
    return {
        type: "RECEIVE_BLOG_DATA",
        data: blogData
    }
}
export const fetchBlogData = () => {
    return dispatch => { 
        dispatch(requestBlogData())
       return fetch('http://localhost:8000/api/posts')
       .then(resp => resp.json())
       .then(data => {
           dispatch(receiveBlogData(data))
       })
       .catch(error => console.log(error));
    }
}


