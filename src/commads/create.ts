import conf from 'conf';
new conf();

import chalk from 'chalk';
import fs from 'fs';
import data from './data';

const create = async () => {
	fs.writeFile(
		'.gitignore',
		data,
		{ flag: 'w', encoding: 'utf-8' },
		(err) => {
			if (err) {
				console.log(
					chalk.bgBlack.red('Could not create .gitignore file')
				);
				process.exit(-1);
			} else {
				console.log(
					chalk.green(
						'Hurray 🥳🥳🚀🚀\nSuccessfully created a .gitignore file'
					)
				);
			}
		}
	);
};
export default create;
