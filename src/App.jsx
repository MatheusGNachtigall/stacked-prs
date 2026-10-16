import { useState } from "react";
import { Button, Card } from "./components";

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<main>
			<h1>Stacked PRs Demo</h1>
			<Card title="Hello, world!">
				<p>Count: {count}</p>
				<Button onClick={() => setCount(count + 1)}>Increment</Button>{" "}
			</Card>
		</main>
	);
}
