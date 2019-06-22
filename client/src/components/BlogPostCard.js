import React from 'react';
const BlogPostCard = ({post}) => {
    return <div className="card">
            <img src={post.image_url} alt="alt" className="card-image"/>
            <div className="container">
                <h3 class="post-title">{post.title}</h3>
                <h5>by {post.author}</h5>
                <p className="post-description">{post.description}</p>
            </div>
        </div>
}

export default BlogPostCard;