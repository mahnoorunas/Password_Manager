import { encrypt } from "../utils/encrypt";
import * as readline from "readline";
import { loadPasswords, savePasswords, PasswordEntry } from "../data";
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

  const account: string = await ask("Enter Account Name: ");
const password: string = await ask("Enter Password: ");

rl.close();

const strength: string = checkPasswordStrength(password);

console.log("\nChecking breach status...");

const breached: boolean = await checkBreach(password);

const encryptedPassword = encrypt(password);
const passwords: PasswordEntry[] = loadPasswords();

passwords.push({
  account,
  password: encryptedPassword,
  strength,
  breached,
});

savePasswords(passwords);
}