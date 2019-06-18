import React, { Component } from 'react';
class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            content: '',
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/posts/' + props.match.params.id)
        .then(resp => resp.json())
        .then(data => this.setState({
            postData: data.post
        }))
        .catch(error => console.log(error));
    }
    render(){
        return <div>
           hey
        </div>
    }
}
export default BlogPost;

