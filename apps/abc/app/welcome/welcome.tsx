import { Button } from "@fe-modular/ui";
import { useState } from "react";

export function Welcome() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col justify-center items-center gap-4 h-screen p-4">
			<h1>Web App</h1>
			<p className="flex mb-4">Components:</p>
			<div className="flex gap-4">
				<Button kind="primary" size="small" onClick={() => setCount(count + 1)}>
					Primary Button
				</Button>
				<Button kind="default" size="small">
					Default Button
				</Button>
			</div>
		</div>
	);
}
