import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
    }
    componentDidMount(){
        const url = 'http://localhost:8000/api/posts/' + this.props.match.params.id;
        console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                post: data.post
            })
        })
        .catch(error => console.log(error));
    }
    render(){
        if(!this.state.post){
            return <div className="content">
                <h1>Loading...</h1>
                <CircularProgress />
            </div>
        }
        return <div className="content">
            <div className="header"><p className="header-title">{this.state.post.title}</p></div>
            <div className="inner-content">
                <h3>{this.state.post.author}</h3>
                <p>{this.state.post.content}</p>
            </div>
        </div>
    }
}
export default BlogPost;

