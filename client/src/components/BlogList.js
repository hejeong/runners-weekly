import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogList = ({posts}) => (
<div>
    {posts.map(post=>{ return <BlogPostCard key={post.id} post={post}/>})}
</div>);

export default BlogList;