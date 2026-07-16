import * as crypto from "crypto";

export default function generatePassword(
  length: number = 12,
  upperCase: boolean = true,
  numbers: boolean = true,
  special: boolean = true
): string {
  let characters: string = "abcdefghijklmnopqrstuvwxyz";

  if (upperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers) {
    characters += "0123456789";
  }

  if (special) {
    characters += "!@#$%^&*()_+[]{}<>?";
  }

  let password: string = "";

  for (let i = 0; i < length; i++) {
    const randomIndex: number = crypto.randomInt(0, characters.length);

    password += characters[randomIndex];
  }

  return password;
}