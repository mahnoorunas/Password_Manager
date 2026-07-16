import * as fs from "fs";

const FILE = "passwords.json";

export interface PasswordEntry {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}

export function loadPasswords(): PasswordEntry[] {
    if (!fs.existsSync(FILE)) {
        fs.writeFileSync(FILE, "[]");
    }

    const data = fs.readFileSync(FILE, "utf8");

    return JSON.parse(data) as PasswordEntry[];
}

export function savePasswords(passwords: PasswordEntry[]): void {
    fs.writeFileSync(FILE, JSON.stringify(passwords, null, 2));
}