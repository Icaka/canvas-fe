type PostProps = {
    post: PostModel;
}

function Post({post}: PostProps) {
    return <>
            <h3>{post.id}</h3>
			<h3>{post.description}</h3>
			<img alt='img' src={post.image}/>
        </>
}

export default Post;