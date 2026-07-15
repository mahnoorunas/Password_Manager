const readline = require("readline");
const checkPasswordStrength = require("../utils/passwordStrength");
const checkBreach = require("../utils/breachChecker");

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

    const password = await ask("Enter Password: ");

    rl.close();

    const strength = checkPasswordStrength(password);

    console.log("\nChecking breach status...\n");

    const breached = await checkBreach(password);

    console.log("Strength :", strength);
    console.log("Breached :", breached ? "YES" : "NO");
};