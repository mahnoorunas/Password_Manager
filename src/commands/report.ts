import { loadPasswords, PasswordEntry } from "../data";

export default function (): void {
  const passwords: PasswordEntry[] = loadPasswords();

  const total: number = passwords.length;

  const strong: number = passwords.filter(
    (p: PasswordEntry) => p.strength === "Strong"
  ).length;

  const medium: number = passwords.filter(
    (p: PasswordEntry) => p.strength === "Medium"
  ).length;

  const weak: number = passwords.filter(
    (p: PasswordEntry) => p.strength === "Weak"
  ).length;

  const breached: number = passwords.filter(
    (p: PasswordEntry) => p.breached
  ).length;

  console.log("\n========== Password Security Report ==========\n");

  console.log("Total Passwords :", total);
  console.log("Strong Passwords :", strong);
  console.log("Medium Passwords :", medium);
  console.log("Weak Passwords :", weak);
  console.log("Compromised Passwords :", breached);

  console.log("\nRecommendations:");

  if (breached > 0) {
    console.log("- Change compromised passwords.");
  }

  if (weak > 0) {
    console.log("- Improve weak passwords.");
  }

  if (weak === 0 && breached === 0) {
    console.log("- Great! Your passwords look secure.");
  }
}