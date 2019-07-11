export const updatePostForm = formData => {
    return {
        type: "UPDATE_POST_FORM",
        formData
    }
}

export const addNewBlogData = (postData) => {
    return {
        type: "ADD_NEW_BLOG_DATA",
        postData
    }
}
// asynchronous
export const createPost = postData => {
    return dispatch => { 
       return  fetch(`http://localhost:8000/api/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            title: postData.title,
            description: postData.description,
            content: postData.content,
            image_url: postData.imageURL,
            username: postData.currentUsername
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.error){
            //error
            alert(data.error)
        }else {
            //success
            dispatch(addNewBlogData(data.blog))
            dispatch({type: "POST_CREATED"});
            dispatch({type: "RESET_FORM"});
        }
    });
    }
}


