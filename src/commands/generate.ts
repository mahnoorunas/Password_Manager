import * as readline from "readline";
import generatePassword from "../utils/passwordGenerator";

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

  const length: number = parseInt(await ask("Password Length: "), 10);

  const upper: boolean =
    (await ask("Include Uppercase? (y/n): ")).toLowerCase() === "y";

  const numbers: boolean =
    (await ask("Include Numbers? (y/n): ")).toLowerCase() === "y";

  const special: boolean =
    (await ask("Include Special Characters? (y/n): ")).toLowerCase() === "y";

  rl.close();

  const password: string = generatePassword(
    length,
    upper,
    numbers,
    special
  );

  console.log("\nGenerated Password\n");
  console.log(password);
}