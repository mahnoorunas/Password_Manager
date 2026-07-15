const readline = require("readline");

const {
    loadPasswords,
    savePasswords
} = require("../data");
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

    const account = await ask("Enter Account Name: ");
    const password = await ask("Enter Password: ");

    rl.close();

    const strength = checkPasswordStrength(password);

    console.log("\nChecking breach status...");

    const breached = await checkBreach(password);

   const passwords = loadPasswords();

passwords.push({
    account,
    password,
    strength,
    breached
});

savePasswords(passwords);

    console.log("\nPassword Saved Successfully!\n");

    console.log("Account :", account);
    console.log("Strength:", strength);
    console.log("Breached:", breached ? "YES" : "NO");
};