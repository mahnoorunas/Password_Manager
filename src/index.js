#!/usr/bin/env node

const { Command } = require("commander");

const addPassword = require("./commands/add");
const listPasswords = require("./commands/list");
const checkPassword = require("./commands/check");
const generatePassword = require("./commands/generate");
const generateReport = require("./commands/report");

const program = new Command();

program
  .name("password-manager")
  .description("CLI Based Password Manager")
  .version("1.0.0");

// Add Password
program
  .command("add")
  .description("Add a new password")
  .action(addPassword);

// List Passwords
program
  .command("list")
  .description("View all saved passwords")
  .action(listPasswords);

// Check Password
program
  .command("check")
  .description("Check password strength")
  .action(checkPassword);

// Generate Password
program
  .command("generate")
  .description("Generate a secure password")
  .action(generatePassword);

// Report
program
  .command("report")
  .description("Generate security report")
  .action(generateReport);

program.parse();