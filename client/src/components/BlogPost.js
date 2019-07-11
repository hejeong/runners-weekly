import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
const BlogPost = ({currentUser, post})=> { 
    
    if(!currentUser){
        return <Redirect to='/login' />
    }
    if(!post){
        return <div className="content">
            <div className="header"><CircularProgress /><p className="header-title"> Loading...</p></div>
            <div className="inner-content">
                
            </div>
        </div>
    }
    return <div className="content">
        <div className="header"><p className="header-title">'s Blog</p></div>
        <div className="inner-content">
        <img src={post.image_url} alt="alt" className="show-image"/>
        <div className="post-content">
            <div className="post-content-title" >
                {post.title} by 
            </div>
            <div className="post-content-text">
                {post.content}
            </div>
        </div>
        </div>
    </div>
}
const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
        post: state.blogReducer.blogs.find(function(blog){
            return blog ? blog.id == this.props.match.params.id : false;
        }),
    }
}

export default connect(mapStateToProps, null)(BlogPost);