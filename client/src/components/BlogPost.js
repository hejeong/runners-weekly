import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getSpecificBlog, resetTargetBlog } from '../actions/blog.js';
class BlogPost extends Component { 

    componentDidMount(){
        this.props.getSpecificBlog(this.props.match.params.id)
    }
    
    componentWillUnmount(){
        this.props.resetTargetBlog()
    }
    render(){
        if(!this.props.currentUser){
            return <Redirect to='/login' />
        }
        if(!this.props.postData.author){
            return (<div className="content">
                <div className="header"><CircularProgress /><p className="header-title"> Loading...</p></div>
                <div className="inner-content">
                </div>
            </div>)
        }
        return (<div className="content">
            <div className="header"><p className="header-title">{this.props.postData.author}'s Blog</p></div>
            <div className="inner-content">
            <img src={this.props.postData.post.image_url} alt="alt" className="show-image"/>
            <div className="post-content">
                <div className="post-content-title" >
                    {this.props.postData.post.title} by {this.props.postData.author}
                </div>
                <div className="post-content-text">
                    {this.props.postData.post.content}
                </div>
            </div>
            </div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
        postData: state.blogReducer.target
    }
}

export default connect(mapStateToProps,{getSpecificBlog, resetTargetBlog})(BlogPost);