function getImageUrl(path) {
    path = '' + path;
    return new URL(path, import.meta.url).href;
}

function formatPrice(price) {
    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formattedPrice;
}

function formatHeading(string) {
    return string.replace('HEADPHONES', '');
}

function removeCategory(string) {
    return string
        .replace('HEADPHONES', '')
        .replace('EARPHONES', '')
        .replace('SPEAKERS', '');
}

export { getImageUrl, formatPrice, formatHeading, removeCategory };
