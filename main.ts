import {Plugin} from 'obsidian';
import {MyPluginSettings} from "./utils/interfaces";
import {getDatesFromSource, getFilesForDate, getFileUri} from "./utils/utils";

const DEFAULT_SETTINGS: MyPluginSettings = {}

export default class Repetition extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor(
			'repetition',
			(source, el, ctx) => {
				console.log('source:', source);
				console.log('el:', el);
				console.log('ctx:', ctx);

				const dates = getDatesFromSource(source);
				if (!dates.length) return; // todo - error message?
				console.log('dates:', dates);

				const files = this.app.vault.getMarkdownFiles();

				// debug how long this takes
				const start = performance.now();

				dates.forEach((date) => {
					const filesForDate = getFilesForDate(date.date, files);
					date.files = filesForDate;
				});

				const end = performance.now();
				console.log('time:', end - start);

				const datesWithFiles = dates.filter((date) => date.files?.length);

				const containerEl = el.createEl('div');

				datesWithFiles.forEach((date) => {
					const dateEl = containerEl.createEl('div');
					dateEl.createEl('h5', {text: `${date.relativeDate}: ${date.date}`});
					date.files?.forEach((file) => {
						const fileEl = dateEl.createEl('div');
						const currentFileLink = this.app.fileManager.generateMarkdownLink(file, ctx.sourcePath);
						console.log('currentFileLink:', currentFileLink);
						fileEl.createEl('a', {text: file.basename, href: getFileUri(file)});
					});
				});
			}
		);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
}
