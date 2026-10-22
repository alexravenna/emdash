import { definePlugin } from "emdash";

export function createPlugin() {
	return definePlugin({
		id: "mermaid",
		version: "1.0.0",
		admin: {
			portableTextBlocks: [
				{
					type: "mermaid",
					label: "Mermaid diagram",
					description: "Add a diagram from Mermaid source",
					icon: "code",
					category: "Content",
					fields: [
						{
							type: "text_input",
							action_id: "code",
							label: "Diagram source",
							placeholder: "flowchart TD\n  A[Start] --> B[End]",
							multiline: true,
						},
						{
							type: "text_input",
							action_id: "alt",
							label: "Accessible description",
							placeholder: "Describe the diagram",
							multiline: true,
						},
					],
				},
			],
		},
	});
}
