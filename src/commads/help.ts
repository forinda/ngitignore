import chalk from 'chalk';
import conf from 'conf';

new conf();

export function help() {
	console.log(
		chalk.bgBlack.green('Type n-ignore --help or n-ignore -h for help')
	);
	console.log(
		chalk.bgBlack.green('Type n-ignore create to create a .gitignore file')
	);
}

