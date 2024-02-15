import './Post.css'

type PostProps = {
    post: PostModel;
}

export function Post({post}: PostProps) {
    return <div className="postContainer">
            <h3>{post.id}</h3>
			<h3>{post.description}</h3>
			<img alt='img' src={post.image}/>
        </div>
}
