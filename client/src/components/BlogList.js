import React from 'react';
import BlogPostCard from './BlogPostCard';
import { Link } from 'react-router-dom';
const BlogList = ({posts}) => (

    posts.map(post=>{ return <li className="card-item"><Link to={'/blog/'+ post.id}><BlogPostCard key={post.id} post={post}/></Link></li>})
);

export default BlogList;