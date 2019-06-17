import React from 'react';
import BlogList from './BlogList';
class BlogContainer extends React.Component {
    constructor() {
      super()
      this.state = {
        blogposts: []
      };
    }
    
    componentDidMount(){
        fetch('http://localhost:8000/api/posts')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                blogposts: data.posts
            })
        })
        .catch(error => console.log(error));
    }
   
    render() {
      return <BlogList posts={this.state.blogposts}/>
    }
  }

  export default BlogContainer;