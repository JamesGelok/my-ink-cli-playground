"use strict";
const React = require("react");
const { useState, useEffect } = React;

const { render, Box, Text, useInput } = require("ink");

const Count = () => {
	const [count, setCount] = useState(0);

	// Something happens on screen
	useEffect(() => {
		const timer = setInterval(() => setCount((c) => c + 1), 100);
		return () => clearInterval(timer);
	}, []);

	// You can do something about it
	useInput((input, key) => {
		if (key.upArrow) setCount((c) => c + 1000);
		if (key.downArrow) setCount((c) => c - 1000);
	});

	return (
		<Box height={10}>
			<Text color="green">Hello, World!</Text>
			<Text color="#AAECE1">I can count to {count}</Text>
		</Box>
	);
};

render(<Count />);
