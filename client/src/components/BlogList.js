import React from 'react';
import BlogPost from './BlogPost';

export const BlogList = ({posts}) => (
<div>
    {posts.map(post=>{ return <BlogPost post={post}/>})}
</div>);