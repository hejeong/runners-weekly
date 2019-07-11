import React from 'react';
import BlogList from './BlogList';
import { connect } from 'react-redux';
import { fetchBlogData } from '../actions/blog.js';
import { Redirect, NavLink } from 'react-router-dom';
class BlogContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        blogposts: [],
        blogPostAuthors: []
      }
    }

    componentDidMount(){
      this.props.fetchBlogData()
    }
   
    render() {
      if(!this.props.currentUser){
        return <Redirect to='/' />
      }
      return <div className="content">
          <div className="header">
            <div className="title-container">
              <p className="header-title">Runner Magazine</p>
            </div>
            <div className="create-post">
              <NavLink to="/blog/new" >+ Create a Post</NavLink>
            </div>
          </div>
          <div className="inner-content">
            <ul className="blog-list">
              <BlogList posts={this.props.blogposts} authors={this.props.blogPostAuthors}/>
            </ul>
          </div>
        </div>
    }
  }
  const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducer.user,
        blogposts: state.blogReducer.blogs,
        blogPostAuthors: state.blogReducer.authors
    }
}

export default connect(mapStateToProps, { fetchBlogData })(BlogContainer);