export function getParametersFromSource(source: string): string[] {
	const parameters = [];
	const regex = /(?<=\{)[^}]+(?=\})/g;
	let match;
	while ((match = regex.exec(source))) {
		parameters.push(match[0]);
	}
	return parameters;
}
