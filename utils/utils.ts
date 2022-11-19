import {TFile} from "obsidian";
import {DateProperties} from "./interfaces";

export function getDatesFromSource(source: string): DateProperties[] {
	if (!source || !source.length) return [];
	const lines = source.split('\n');

	const dates: DateProperties[] = [];
	const dateNow = new Date();

	lines.forEach((line) => {
		const number = parseInt(line);
		const timeUnit = line.split('-')[1].trim();
		if (isNaN(number) || !timeUnit) return;

		const date = new Date();
		let relativeDate;

		switch (timeUnit) {
			case 'day':
				date.setDate(dateNow.getDate() - number);
				relativeDate = number === 1 ? 'yesterday' : `${number} days ago`;
				break;
			case 'week':
				date.setDate(dateNow.getDate() - number * 7);
				relativeDate = number === 1 ? 'one week ago' : `${number} weeks ago`;
				break;
			case 'month':
				date.setMonth(dateNow.getMonth() - number);
				relativeDate = number === 1 ? 'one month ago' : `${number} months ago`;
				break;
			case 'year':
				date.setFullYear(dateNow.getFullYear() - number);
				relativeDate = number === 1 ? 'one year ago' : `${number} years ago`;
				break;
			default:
				return;
		}

		dates.push({date: date.toDateString(), relativeDate});
	});

	return dates;
}

export function getFilesForDate(compareDate: string, files: TFile[]): TFile[] {
	const filesForDate: TFile[] = [];

	files.forEach((file) => {
		const fileDate = new Date(file.stat.ctime);
		if (fileDate.toDateString() === compareDate)
			filesForDate.push(file);
	});

	return filesForDate;
}

export function getFileUri(file: TFile): string {
	const uri = encodeURI(file.path);
	return `obsidian://open?vault=${file.vault.getName()}&file=${uri}`;
}
