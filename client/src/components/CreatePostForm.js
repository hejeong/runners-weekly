import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updatePostForm, createPost } from '../actions/postForm.js';
const CreatePostForm = ({postForm, createPost, updatePostForm, currentUser, currentUsername}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updateFormData = {
            ...postForm,
            [name]: value
        }
        updatePostForm(updateFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createPost({...postForm, currentUsername: currentUsername})
    }
     
    if(!currentUser){
        return <Redirect to='/login' />
    }
    if(postForm.redirect){
        return(<Redirect to='/blog' />)
    }       
    return(
        <div className="content">
            <div className="header"><p className="header-title">Create your blogpost</p></div>
            <div className="inner-content">
            <form onSubmit={handleSubmit} className="create-post-form">
                <h4>Create a Post</h4>
                <input id="title" name="title" placeholder="Post Title" type="text" value={postForm.title} onChange={handleInputChange} />
                <br></br><br></br>
                <input id="description" name="description" placeholder="Post Description" type="text" value={postForm.description} onChange={handleInputChange} />
                <br></br><br></br>
                <textarea id="content" name="content" placeholder="Post Content" value={postForm.content} onChange={handleInputChange} />
                <br></br><br></br>
                <input id="imageURL" name="imageURL" placeholder="Post Image URL" type="text" value={postForm.imageURL} onChange={handleInputChange} />
                <br></br><br></br>
                <input type="submit" name="submit" value="Create Post" className="create-submit"/>
            </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        postForm: state.postFormReducer,
        currentUsername: state.loginReducer.username,
        currentUser: state.usersReducer.user 
    }
}

export default connect(mapStateToProps, {updatePostForm, createPost})(CreatePostForm);