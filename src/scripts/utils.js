/**
 * Returns the URL for the given path.
 * @param {string} path - The path to be converted into a URL.
 * @returns {string} The URL derived from the given path.
 */
function getImageUrl(path) {
    path = '' + path;
    return new URL(path, import.meta.url).href;
}

/**
 * Formats the given price into USD currency.
 * @param {number} price - The price to be formatted.
 * @throws {Error} If the input is not a number.
 * @returns {string} The formatted price in USD currency.
 */
function formatPrice(price) {
    if (typeof price !== 'number') {
        throw new Error('Invalid input. Expected a number');
    }

    const input = parseInt(price) < 0 ? 0 : price;

    const formattedPrice = input.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formattedPrice;
}

/**
 * Removes the word 'HEADPHONES' from the given string.
 * @param {string} string - The string from which 'HEADPHONES' will be removed.
 * @returns {string} The string with 'HEADPHONES' removed.
 */
function formatHeading(string) {
    return string.replace('HEADPHONES', '');
}

/**
 * Removes the words 'HEADPHONES', 'EARPHONES', and 'SPEAKERS' from the given string.
 * @param {string} string - The string from which 'HEADPHONES', 'EARPHONES', and 'SPEAKERS' will be removed.
 * @returns {string} The string with 'HEADPHONES', 'EARPHONES', and 'SPEAKERS' removed.
 */
function removeCategory(string) {
    return string
        .replace('HEADPHONES', '')
        .replace('EARPHONES', '')
        .replace('SPEAKERS', '');
}

export { getImageUrl, formatPrice, formatHeading, removeCategory };
