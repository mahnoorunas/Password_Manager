import * as crypto from "crypto";

const ALGORITHM = "aes-256-cbc";

// Secret key (32 bytes for AES-256)
const SECRET_KEY = crypto
  .createHash("sha256")
  .update("my-super-secret-key")
  .digest();

export function encrypt(text: string): string {
  // Generate a random IV (16 bytes)
  const iv = crypto.randomBytes(16);

  // Create cipher
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    SECRET_KEY,
    iv
  );

  // Encrypt the text
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  // Store IV and encrypted text together
  return iv.toString("hex") + ":" + encrypted;
}

export function decrypt(encryptedText: string): string {
  const parts = encryptedText.split(":");

  if (parts.length !== 2) {
    throw new Error("Invalid encrypted text format.");
  }

 const ivHex = parts[0]!;
const encrypted = parts[1]!;

  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    SECRET_KEY,
    iv
  );

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}