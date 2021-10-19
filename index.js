#! /usr/bin/env node
const { program } = require("commander")
const create = require("./commads/create")
const help = require("./commads/help")

program
	.command("create")
	.description("Create a .gitignore file in the current directory")
	.action(create)

program.command("--help").description("Show help info").action(help)
program.command("-h").description("Show help info").action(help)

program.parse()
