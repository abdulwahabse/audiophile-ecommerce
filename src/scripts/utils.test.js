import { it, expect, describe } from 'vitest';
import {
    getImageUrl,
    formatPrice,
    formatHeading,
    removeCategory,
} from './utils';

describe('getImageUrl()', () => {
    it('should should return the correct URL', () => {
        const input = '/images/image.jpg';
        const expectedResult = new URL(input, import.meta.url).href;

        const result = getImageUrl(input);

        expect(result).toBe(expectedResult);
    });

    it('should convert non-string inputs to strings', () => {
        const input = 123;
        const expectedResult = new URL(input, import.meta.url).href;

        const result = getImageUrl(input);

        expect(result).toBe(expectedResult);
    });
});

describe('formatPrice()', () => {
    it('should return the price formatted as USD currency', () => {
        const input = 1000;
        const expectedResult = '$1,000';

        const result = formatPrice(input);

        expect(result).toBe(expectedResult);
    });

    it('should handle negative prices', () => {
        const input = -1000;
        const expectedResult = '$0';

        const result = formatPrice(input);

        expect(result).toBe(expectedResult);
    });

    it('should handle 0 price', () => {
        const input = 0;
        const expectedResult = '$0';

        const result = formatPrice(input);

        expect(result).toBe(expectedResult);
    });

    it('should handle invalid price', () => {
        const input = 'abc';

        const resultFn = () => formatPrice(input);

        expect(resultFn).toThrow();
    });
});

describe('formatHeading()', () => {
    it('should remove "HEADPHONES" from the string', () => {
        const input = 'Buy the best HEADPHONES in town!';
        const expectedResult = 'Buy the best  in town!';

        const result = formatHeading(input);

        expect(result).toBe(expectedResult);
    });

    it('should handle string without "HEADPHONES"', () => {
        const input = 'The quick brown fox jumps over the lazy dog.';
        const expectedResult = input;

        const result = formatHeading(input);

        expect(result).toBe(expectedResult);
    });
});

describe('removeCategory()', () => {
    it('should remove "HEADPHONES", "EARPHONES" and "SPEAKERS" from the string', () => {
        const input =
            'Buy the best HEADPHONES, EARPHONES and SPEAKERS in town!';
        const expectedResult = 'Buy the best ,  and  in town!';

        const result = removeCategory(input);

        expect(result).toBe(expectedResult);
    });

    it('should handle string without "HEADPHONES", "EARPHONES" and "SPEAKERS"', () => {
        const input = 'The quick brown fox jumps over the lazy dog.';
        const expectedResult = input;

        const result = removeCategory(input);

        expect(result).toBe(expectedResult);
    });
});
