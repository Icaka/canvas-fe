import { Post } from "./Post";

type PostListProps = {
    posts: PostModel[];
}

export function PostList({posts}: PostListProps) {
    return <>
            <h1>API Posts</h1>
            <div className="pListContainer">
                <ul>
                {posts &&
                    posts.map(( post ) => (
                    <li key={post.id}>
                        <Post post={post}></Post>
                    </li>
                    ))}
                </ul>
            </div>
        </>
}
