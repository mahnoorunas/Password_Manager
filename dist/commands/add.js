"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const readline = __importStar(require("readline"));
const Password_1 = __importDefault(require("../models/Password"));
const encrypt_1 = require("../utils/encrypt");
const passwordStrength_1 = __importDefault(require("../utils/passwordStrength"));
const breachChecker_1 = __importDefault(require("../utils/breachChecker"));
async function default_1() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const ask = (question) => {
        return new Promise((resolve) => {
            rl.question(question, resolve);
        });
    };
    try {
        const account = await ask("Enter Account Name: ");
        const password = await ask("Enter Password: ");
        rl.close();
        const strength = (0, passwordStrength_1.default)(password);
        console.log("\nChecking breach status...");
        const breached = await (0, breachChecker_1.default)(password);
        const encryptedPassword = (0, encrypt_1.encrypt)(password);
        await Password_1.default.create({
            account,
            password: encryptedPassword,
            strength,
            breached,
        });
        console.log("\n✅ Password Saved Successfully!\n");
        console.log("Account :", account);
        console.log("Strength:", strength);
        console.log("Breached:", breached ? "YES" : "NO");
    }
    catch (error) {
        rl.close();
        console.error(error);
    }
}
//# sourceMappingURL=add.js.map