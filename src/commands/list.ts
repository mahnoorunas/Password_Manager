import { decrypt } from "../utils/encrypt";
import { loadPasswords, PasswordEntry } from "../data";

export default function (): void {
  const passwords: PasswordEntry[] = loadPasswords();

  if (passwords.length === 0) {
    console.log("\nNo passwords saved.\n");
    return;
  }

  console.log("\n===== Saved Passwords =====\n");

  passwords.forEach((item: PasswordEntry, index: number) => {
    console.log(`${index + 1}.`);

    console.log("Account :", item.account);
    console.log("Password:", decrypt(item.password));
    console.log("Strength:", item.strength);
    console.log("Breached:", item.breached ? "YES" : "NO");

    console.log("----------------------------");
  });
}