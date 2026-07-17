import * as crypto from "crypto";

export default async function checkBreach(
  password: string
): Promise<boolean> {
  const sha1 = crypto
    .createHash("sha1")
    .update(password)
    .digest("hex")
    .toUpperCase();

  const prefix = sha1.substring(0, 5);
  const suffix = sha1.substring(5);

  console.log("Sending request to API...");

  try {
    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    );

    console.log("Response received.");

    const text = await response.text();

    const hashes = text.split("\n");

    for (const hash of hashes) {
      const [hashSuffix] = hash.split(":");

      if (hashSuffix?.trim() === suffix) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error("Error:", error);

    return false;
  }
}