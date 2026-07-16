import * as readline from "readline";
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

  const password: string = await ask("Enter Password: ");

  rl.close();

  const strength: string = checkPasswordStrength(password);

  console.log("\nChecking breach status...\n");

  const breached: boolean = await checkBreach(password);

  console.log("Strength :", strength);
  console.log("Breached :", breached ? "YES" : "NO");
}