const { expect } = require("@jest/globals")
const { describe } = require("yargs")
const zero = require("./../commads/status.code")
const help = require("./../commads/help")

test("Help status", () => {
	expect(zero()).toBe(0)
})
test("Help status", () => {
	expect(help()).toBe(0)
})
