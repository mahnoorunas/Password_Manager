const readline = require("readline");
const generatePassword = require("../utils/passwordGenerator");

module.exports = async function () {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const ask = (question) => {
        return new Promise((resolve) => {
            rl.question(question, resolve);
        });
    };

    const length = parseInt(await ask("Password Length: "));

    const upper = (await ask("Include Uppercase? (y/n): "))
        .toLowerCase() === "y";

    const numbers = (await ask("Include Numbers? (y/n): "))
        .toLowerCase() === "y";

    const special = (await ask("Include Special Characters? (y/n): "))
        .toLowerCase() === "y";

    rl.close();

    const password = generatePassword(
        length,
        upper,
        numbers,
        special
    );

    console.log("\nGenerated Password\n");

    console.log(password);
};