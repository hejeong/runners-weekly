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
      return <div className="content">
          <div className="header"><p className="header-title">Runner Magazine</p></div>
          <div className="inner-content">
            <ul className="blog-list">
              <BlogList posts={this.state.blogposts}/>
            </ul>
          </div>
        </div>
    }
  }

  export default BlogContainer;