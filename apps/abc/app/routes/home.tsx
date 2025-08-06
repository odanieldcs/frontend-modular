import { Welcome } from "../welcome/welcome";

export function meta() {
	return [
		{ title: "Web App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <Welcome />;
}
