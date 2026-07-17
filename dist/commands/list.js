"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const Password_1 = __importDefault(require("../models/Password"));
async function default_1() {
    const passwords = await Password_1.default.find();
    if (passwords.length === 0) {
        console.log("\nNo passwords saved.\n");
        return;
    }
    console.log("\n===== Saved Passwords =====\n");
    passwords.forEach((item, index) => {
        console.log(`${index + 1}.`);
        console.log("Account :", item.account);
        console.log("Password:", item.password);
        console.log("Strength:", item.strength);
        console.log("Breached:", item.breached ? "YES" : "NO");
        console.log("----------------------------");
    });
}
//# sourceMappingURL=list.js.map