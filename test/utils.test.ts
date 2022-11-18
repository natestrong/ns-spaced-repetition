import {getParametersFromSource} from "../utils/utils";
import {expect} from "chai";

describe('utils.getParametersFromSource', () => {
	it('should return an array of parameters', () => {
		const source = '{param1} {param2}';
		const parameters = getParametersFromSource(source);
		expect(parameters).to.be.an('array');
	});
});
