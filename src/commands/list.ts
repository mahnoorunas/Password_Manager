import Password from "../models/Password";

export default async function (): Promise<void> {

  const passwords = await Password.find();

  if (passwords.length === 0) {
    console.log("\nNo passwords saved.\n");
    return;
  }

  console.log("\n===== Saved Passwords =====\n");

  passwords.forEach((item, index) => {
    console.log(`${index + 1}.`);

    console.log("Account :", item.account);
    console.log("Password:", item.password);
    console.log("Strength:", item.strength);
    console.log("Breached:", item.breached ? "YES" : "NO");

    console.log("----------------------------");
  });
}