import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
class BlogPost extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            postAuthor: null
        }
    }
    componentDidMount(){
        const url = 'http://localhost:8000/api/posts/' + this.props.match.params.id;
        console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                post: data.post,
                postAuthor: data.post_author
            })
        })
        .catch(error => console.log(error));
    }
    render(){
        if(!this.props.currentUser){
            return <Redirect to='/login' />
          }
        if(!this.state.post){
            return <div className="content">
                <div className="header"><p className="header-title"><CircularProgress /> Loading...</p></div>
                <div className="inner-content">
                
                </div>
               
            </div>
        }
        return <div className="content">
            <div className="header"><p className="header-title">{this.state.postAuthor.username}'s Blog</p></div>
            <div className="inner-content">
            <img src={this.state.post.image_url} alt="alt" className="show-image"/>
            <div className="post-content">
                <div className="post-content-title" >
                    {this.state.post.title} by {this.state.postAuthor.name}
                </div>
                <div className="post-content-text">
                    {this.state.post.content}
                </div>
            </div>
            </div>
        </div>
    }
}
const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
    }
}

export default connect(mapStateToProps, null)(BlogPost);