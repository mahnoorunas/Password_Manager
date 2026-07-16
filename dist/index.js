#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const add_1 = __importDefault(require("./commands/add"));
const list_1 = __importDefault(require("./commands/list"));
const check_1 = __importDefault(require("./commands/check"));
const generate_1 = __importDefault(require("./commands/generate"));
const report_1 = __importDefault(require("./commands/report"));
const program = new commander_1.Command();
program
    .name("password-manager")
    .description("CLI Based Password Manager")
    .version("1.0.0");
// Add Password
program
    .command("add")
    .description("Add a new password")
    .action(add_1.default);
// List Passwords
program
    .command("list")
    .description("View all saved passwords")
    .action(list_1.default);
// Check Password
program
    .command("check")
    .description("Check password strength")
    .action(check_1.default);
// Generate Password
program
    .command("generate")
    .description("Generate a secure password")
    .action(generate_1.default);
// Report
program
    .command("report")
    .description("Generate security report")
    .action(report_1.default);
program.parse();
//# sourceMappingURL=index.js.map