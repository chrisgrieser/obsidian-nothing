import { Plugin } from "obsidian";

export default class ObsidianNothing extends Plugin {
	async onload() {
		this.addCommand({
			id: "nothing-noop",
			name: "Do Nothing (no-op)",
			callback: () => {},
		});
	}
}
