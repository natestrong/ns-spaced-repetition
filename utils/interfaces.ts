import {TFile} from "obsidian";

export interface MyPluginSettings {
}

export interface DateProperties {
	date: string,
	relativeDate: string,
	files?: TFile[]
}
