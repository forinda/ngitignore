import { zero } from './../src/commads/zero';

test('Help status', () => {
	expect(zero()).toBe(0);
});
