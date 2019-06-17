import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({posts}) => (
<div>
    {posts.map(post=>{ return <BlogPost post={post}/>})}
</div>);

export default BlogList;