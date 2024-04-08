export const insertIntoTheBlank = (str: string, character: string = '-'): string => {
    return str.replace(/\s/g, character);
}

export function UpCaseFirstLetter(srt: string) {
    if (typeof srt === 'string') return srt.replace(/./, srt[0].toUpperCase())
    return ''
}

export const repaceWhiteSpace = (str: string): string => {
    return str.replace(/\s/g, '');
}

export function replaceSpecialCharacters(inputString: string): string {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/`'"\|+=-]/g;
    var result = inputString.replace(regex, '');
    return result;
}

export function replaceSpecialCharactersEndWhiteSpace(inputString: string): string {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/`'"\|+=-]|\s/g;
    var result = inputString.replace(regex, '');
    return result;
}