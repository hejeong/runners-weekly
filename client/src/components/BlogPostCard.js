import React from 'react';
import { Link } from 'react-router-dom';
const BlogPostCard = ({post}) => {
    return <Link to={'/blog/'+ post.id}>
        <h3>{post.title}</h3>
        <h5>{post.author}</h5>
    </Link>
}

export default BlogPostCard;