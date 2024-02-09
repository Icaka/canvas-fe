import { useState, useEffect } from 'react'
import './App.css'
import { PostList } from './posts/PostList';

function App() {
	const [data, setData] = useState<PostModel[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/posts`)
		.then((response) => {
		
		if (!response.ok) {
			throw new Error(
			`This is an HTTP error: The status is ${response.status}`
			);
		}
		return response.json();
		})  
		.then((actualData) => {
		setData(actualData);
		setError(null);
		})
		.catch((err) => {
		setError(err.message);
		setData([]);
		})
		.finally(() => {
		setLoading(false);
		});
	}, []);
	console.log(data);
	return <div className="App">
		{loading && <div>A moment please...</div>}
		{error && (
		<div>{`There is a problem fetching the post data - ${error}`}</div>
		)}
		{data && <PostList posts = {data}></PostList>}
	</div>;
}

export default App