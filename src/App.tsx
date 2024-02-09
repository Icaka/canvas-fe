import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState<Post[]>([]);
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
		<h1>API Posts</h1>
			{loading && <div>A moment please...</div>}
			{error && (
			<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
		<ul>
		{data &&
			data.map(( {id, description, image} ) => (
			<li key={id}>
				<h3>{id}</h3>
				<h3>{description}</h3>
				<img alt='img' src={image}/>
			</li>
			))}
		</ul>
	</div>;
}

export default App