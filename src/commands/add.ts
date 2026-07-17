import * as readline from "readline";

import Password from "../models/Password";
import { encrypt } from "../utils/encrypt";
import checkPasswordStrength from "../utils/passwordStrength";
import checkBreach from "../utils/breachChecker";

export default async function (): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question: string): Promise<string> => {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  };

  try {
    const account = await ask("Enter Account Name: ");
    const password = await ask("Enter Password: ");

    rl.close();

    const strength = checkPasswordStrength(password);

    console.log("\nChecking breach status...");

    const breached = await checkBreach(password);

    const encryptedPassword = encrypt(password);

    await Password.create({
      account,
      password: encryptedPassword,
      strength,
      breached,
    });

    console.log("\n✅ Password Saved Successfully!\n");
    console.log("Account :", account);
    console.log("Strength:", strength);
    console.log("Breached:", breached ? "YES" : "NO");
  } catch (error) {
    rl.close();

    console.error(error);
  }
}