import React, {useEffect} from 'react';
import {BaseButton} from "@chat-bot/ui";


const post = (path: string, body: object) => fetch(path, {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(body)
})

const App = () => {
	useEffect(() => {
		post('http://localhost:8000/messages', {
			some: 42,
		})
		.then(res => res.json())
		.then(console.log)
	}, [])
	
	return (
		<div>
			<BaseButton>click</BaseButton>
			Works
		</div>
	);
};

export {App};
