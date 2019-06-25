import React from 'react';
import BlogPostCard from './BlogPostCard';
import { Link } from 'react-router-dom';
const BlogList = ({posts, authors}) => {
    let count = 0;
    return posts.map(post=>{ 
        const postID = post.id;
        const author = authors[count][postID];
        count++;
        return <li className="card-item" key={post.id}>
            <Link to={'/blog/'+ post.id}>
                <BlogPostCard post={post} author={author}/>
            </Link>
        </li>})
};

export default BlogList;