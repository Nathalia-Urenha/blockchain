const lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function uppercase(char) {
    if (char >= "A" && char <= "Z") {
        return true;
    };
    return false;
};

function checkText(text) {
    if (text === "") {
        alert("Insira a senha!!!");
        return false;
    };
    return true;
};

export function encryptCesar(text) {
    const key = '7a9dcbc8bfb04a98acd91dd7a'
    let result = '';
    if (checkText(text, key)) {
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            let index = 0;
            if (char === ' ') {
                result = `${result} `;
            } else {
                if (uppercase(char)) {
                    index = lettersUpperCase.indexOf(char);
                    if ((index + key.length) > 25) {
                        index = index - 26;
                    };
                    result = `${result}${lettersUpperCase[index + key.length]}`;
                } else {
                    index = lettersLowercase.indexOf(char);
                    if ((index + key.length) > 25) {
                        index = index - 26;
                    };
                    result = `${result}${lettersLowercase[index + key.length]}`;
                };
            };
        };

        return result;
    };
    return result;
};

export function decryptCesar(message) {
    const key = '7a9dcbc8bfb04a98acd91dd7a';
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let c = message.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 - key.length + 26) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 - key.length + 26) % 26 + 97);
        } else {
            result += message.charAt(i);
        };
    };
    return result;
};
