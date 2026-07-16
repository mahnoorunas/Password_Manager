#!/usr/bin/env node

import { Command } from "commander";

import addPassword from "./commands/add";
import listPasswords from "./commands/list";
import checkPassword from "./commands/check";
import generatePassword from "./commands/generate";
import generateReport from "./commands/report";

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