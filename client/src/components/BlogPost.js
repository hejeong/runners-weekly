export const BlogPost = ({post}) => {
    return <div>
        <h3>{post.title}</h3>
        <h5>{post.author}</h5>
        <p>{post.content}</p>
    </div>
}