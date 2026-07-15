const crypto = require("crypto");

async function checkBreach(password) {

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

        const text = await response.text();

        const hashes = text.split("\n");

        for (const hash of hashes) {

            const [hashSuffix] = hash.split(":");

            if (hashSuffix === suffix) {

                return true;
            }
        }

        return false;

    } catch (error) {

        console.log(error.message);

        return false;
    }
}

module.exports = checkBreach;