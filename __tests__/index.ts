import { help } from './../src/commads/help';
import { zero } from './../src/commads/zero';

test('Help status', () => {
	expect(zero()).toBe(0);
});
test('Help status', () => {
	expect(help()).toBe(0);
});
