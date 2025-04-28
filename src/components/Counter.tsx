import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className="btn">
			<button onClick={increment}>increment</button>
			<p className="p">{count}</p>
		</div>
	);
};
