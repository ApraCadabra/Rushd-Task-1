//takes a string and converts it to a slug (url friendly) format.
//url friendly means that it should be lowercase, with words separated by a specified separator (default is a hyphen), and should not contain any special characters or spaces.
export function slugify(input: string, separator: string = "-"): string {
    
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    if (typeof separator !== "string") {
        throw new Error("Separator must be a string");
    }

    return input.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[-_ ]+/g, " ")
        .replace(/[^0-9a-z ]/g, "")
        .trim()
        .replaceAll(" ", separator);
}

