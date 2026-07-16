"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const encrypt_1 = require("../utils/encrypt");
const data_1 = require("../data");
function default_1() {
    const passwords = (0, data_1.loadPasswords)();
    if (passwords.length === 0) {
        console.log("\nNo passwords saved.\n");
        return;
    }
    console.log("\n===== Saved Passwords =====\n");
    passwords.forEach((item, index) => {
        console.log(`${index + 1}.`);
        console.log("Account :", item.account);
        console.log("Password:", (0, encrypt_1.decrypt)(item.password));
        console.log("Strength:", item.strength);
        console.log("Breached:", item.breached ? "YES" : "NO");
        console.log("----------------------------");
    });
}
//# sourceMappingURL=list.js.map