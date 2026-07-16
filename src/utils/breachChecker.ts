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

  try {
    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    );

    const text: string = await response.text();

    const hashes: string[] = text.split("\n");

    for (const hash of hashes) {
      const [hashSuffix] = hash.split(":");

      if (hashSuffix === suffix) {
        return true;
      }
    }

    return false;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    return false;
  }
}