import {getDatesFromSource, getFilesForDate} from "../utils/utils";
import {expect} from "chai";
import {TFile} from "obsidian";
import {mockTFiles} from "./mockData";

describe('utils.getParametersFromSource', () => {
	it('should return an array of parameters', () => {
		const source = `1-week 
2-week 
1-day
10-day
1-month
3-month
1-year`;
		const parameters = getDatesFromSource(source);
		expect(parameters).to.be.an('array');
		expect(parameters.length).to.equal(7);
		expect(parameters[0]).to.be.an.instanceOf(Date);
	});
});

describe('utils.getFilesForDate', () => {
	it('should return an array of files', () => {
		const date = "Thu Jan 06 2022";
		const files: Partial<TFile>[] = mockTFiles;
		const filesForDate = getFilesForDate(date, files as TFile[]);
		expect(filesForDate).to.be.an('array');
	});
});
