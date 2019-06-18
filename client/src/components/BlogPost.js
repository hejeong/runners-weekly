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
        const url = 'http://localhost:8000/api/posts/' + this.props.match.params.id;
        console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
        console.log(data)})
        .catch(error => console.log(error));
    }
    render(){
        return <div>
           BLGOs
        </div>
    }
}
export default BlogPost;

