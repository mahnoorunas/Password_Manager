const passwords = [];

module.exports = passwords;const fs = require("fs");

const FILE = "passwords.json";

function loadPasswords() {

    if (!fs.existsSync(FILE)) {

        fs.writeFileSync(FILE, "[]");
    }

    const data = fs.readFileSync(FILE, "utf8");

    return JSON.parse(data);
}

function savePasswords(passwords) {

    fs.writeFileSync(
        FILE,
        JSON.stringify(passwords, null, 2)
    );
}

module.exports = {
    loadPasswords,
    savePasswords
};