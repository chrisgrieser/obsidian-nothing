import { Plugin } from "obsidian";

export default class ObsidianNothing extends Plugin {
	async onload() {
		this.addCommand({
			id: "nothing-noop",
			name: "Do nothing (no-op)",
			// biome-ignore lint/nursery/noEmptyBlockStatements: well, it's a no-op
			callback: () => {},
		});
	}
}
