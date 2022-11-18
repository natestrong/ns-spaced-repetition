import {Plugin} from 'obsidian';
import {MyPluginSettings} from "./util/interfaces";

const DEFAULT_SETTINGS: MyPluginSettings = {}

export default class Repetition extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor(
			'repetition',
			(
				source,
				el,
				ctx) => {
				console.log('source:', source);
				console.log('el:', el);
				console.log('ctx:', ctx);
			}
		);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
}
