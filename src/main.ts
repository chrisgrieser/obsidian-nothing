import { Plugin } from "obsidian";

export default class ObsidianNothing extends Plugin {
	override onload() {
		this.addCommand({
			id: "nothing-noop",
			name: "Do nothing (no-op)",
			// biome-ignore lint/suspicious/noEmptyBlockStatements: it's deliberately a no-op
			callback: () => {},
		});
	}
}
