const conf = new (require("conf"))()
const chalk = require("chalk")

function help() {
	console.log(
		chalk.bgBlack.green("Type n-ignore --help or n-ignore -h for help")
	)
	console.log(
		chalk.bgBlack.green("Type n-ignore create to create a .gitignore file")
	)
	return 0
}

module.exports = help
