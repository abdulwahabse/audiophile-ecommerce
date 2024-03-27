import { it, expect } from 'vitest';
import { getImageUrl } from './utils';

it('should should return the correct URL', () => {
    const input = '/images/image.jpg';
    const expectedResult = new URL(input, import.meta.url).href;

    const result = getImageUrl(input);

    expect(result).toBe(expectedResult);
});
