const conf = new (require("conf"))()
const chalk = require("chalk")
const fs = require("fs")
const path = require("path")
const data = require("./data")

const create = async () => {
	// const data = fs.readFileSync(path.resolve(".gitignore.txt"), { encoding: "utf-8" })
	// console.log(data)
	fs.writeFile(
		".gitignore",
		data,
		{ flag: "w", encoding: "utf-8" },
		(err) => {
			if (err) {
				console.log(
					chalk.bgBlack.red("Could not create .gitignore file")
				)
				process.exit(-1)
			} else {
				console.log(
					chalk.green(
						"Hurray 🥳🥳🚀🚀\nSuccessfully created a .gitignore file"
					)
				)
			}
		}
	)
}
module.exports = create
