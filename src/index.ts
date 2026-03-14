function isAlphanumeric(character: string): boolean {
    const code: number = character.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

function isWhitespace(character: string): boolean {
    return /\s/.test(character);
}

function slugify(input: string): string {
    let slug: string = "";
    for (const character of input) {
        if (isAlphanumeric(character)) {
            slug += character.toLowerCase();
        } else if (isWhitespace(character) && slug.length > 0 && !slug.endsWith("-")) {
            slug += "-";
        }
    }

    if (slug.endsWith("-")) {
        slug = slug.slice(0, -1);
    }

    return slug;
}

module.exports = slugify;