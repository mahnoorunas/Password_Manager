const crypto = require("crypto");

function generatePassword(
    length = 12,
    upperCase = true,
    numbers = true,
    special = true
) {

    let characters = "abcdefghijklmnopqrstuvwxyz";

    if (upperCase)
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbers)
        characters += "0123456789";

    if (special)
        characters += "!@#$%^&*()_+[]{}<>?";

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = crypto.randomInt(0, characters.length);

        password += characters[randomIndex];
    }

    return password;
}

module.exports = generatePassword;