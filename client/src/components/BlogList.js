import React from 'react';
import BlogPostCard from './BlogPostCard';
import { Link } from 'react-router-dom';
const BlogList = ({posts}) => (

    posts.map(post=>{ return <li className="card-item" key={post.id}><Link to={'/blog/'+ post.id}><BlogPostCard post={post}/></Link></li>})
);

export default BlogList;