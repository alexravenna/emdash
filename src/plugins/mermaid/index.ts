import { fileURLToPath } from "node:url";
import type { PluginDescriptor } from "emdash";

const modulePath = (url: URL) => fileURLToPath(url).replaceAll("\\", "/");

export function mermaidPlugin(): PluginDescriptor {
	return {
		id: "mermaid",
		version: "1.0.0",
		entrypoint: modulePath(new URL("./plugin.ts", import.meta.url)),
		componentsEntry: modulePath(new URL("./astro/index.ts", import.meta.url)),
	};
}
