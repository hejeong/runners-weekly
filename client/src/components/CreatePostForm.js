import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class CreatePostForm extends Component {
    constructor(){
        super()
        this.state={
            title: '',
            description: '',
            content: '',
            imageURL: '',
            redirect: false,
        }
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLoginOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoginOnSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8000/api/post/new`, {
            method: 'POST',
            headers: {
				"Content-Type": 'application/json'
            },
            body: JSON.stringify({
                post: {
                    title: this.state.title,
                    description: this.state.description,
                    content: this.state.content,
                    imageURL: this.state.imageURL,
                    username: this.props.currentUsername
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.error){
                //error
                alert(data.error)
            }else {
                //success
               
            }
        });
    }
     
    render(){ 
       
        return(
            <div className="content">
                <div className="header"><p className="header-title">Create your blogpost</p></div>
                <div className="inner-content">
                <form onSubmit={this.handleLoginOnSubmit} className="create-post-form">
                    <h4>Create a Post</h4>
                    <input id="title" name="title" placeholder="Post Title" type="text" value={this.state.title} onChange={this.handleLoginOnChange} />
                    <br></br><br></br>
                    <input id="description" name="description" placeholder="Post Description" type="text" value={this.state.description} onChange={this.handleLoginOnChange} />
                    <br></br><br></br>
                    <input id="content" name="content" placeholder="Post Content" type="text" value={this.state.content} onChange={this.handleLoginOnChange} />
                    <br></br><br></br>
                    <input id="imageURL" name="imageURL" placeholder="Post Image URL" type="text" value={this.state.imageURL} onChange={this.handleLoginOnChange} />
                    <br></br><br></br>
                    <input type="submit" name="submit" value="Login" className="login-submit"/>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUsername: state.usersReducer.username }
}

export default connect(mapStateToProps, null)(CreatePostForm);