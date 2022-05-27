#! /usr/bin/env node
import { program } from 'commander';
import create from './commads/create';
import { help } from './commads/help';

program
	.command('create')
	.description('Create a .gitignore file in the current directory')
	.action(create);

program.command('--help').description('Show help info').action(help);
program.command('-h').description('Show help info').action(help);

program.parse();
