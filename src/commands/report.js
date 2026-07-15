const { loadPasswords } = require("../data");

module.exports = function () {

    const passwords = loadPasswords();

    const total = passwords.length;

    const strong = passwords.filter(
        p => p.strength === "Strong"
    ).length;

    const medium = passwords.filter(
        p => p.strength === "Medium"
    ).length;

    const weak = passwords.filter(
        p => p.strength === "Weak"
    ).length;

    const breached = passwords.filter(
        p => p.breached
    ).length;

    console.log("\n========== Password Security Report ==========\n");

    console.log("Total Passwords :", total);
    console.log("Strong Passwords :", strong);
    console.log("Medium Passwords :", medium);
    console.log("Weak Passwords :", weak);
    console.log("Compromised Passwords :", breached);

    console.log("\nRecommendations:");

    if (breached > 0) {
        console.log("- Change compromised passwords.");
    }

    if (weak > 0) {
        console.log("- Improve weak passwords.");
    }

    if (weak === 0 && breached === 0) {
        console.log("- Great! Your passwords look secure.");
    }
};