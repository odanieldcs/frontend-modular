import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		tailwindcss(),
		dts({ include: ["src"], insertTypesEntry: true }),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "@fe-modular/ui",
			fileName: () => "index.js",
			formats: ["es"],
		},
		rollupOptions: {
			// Make sure to externalize deps that sh ouldn't be bundled
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		cssCodeSplit: false,
		minify: true,
	},
});
