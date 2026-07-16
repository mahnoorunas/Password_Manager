export interface PasswordEntry {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}
export declare function loadPasswords(): PasswordEntry[];
export declare function savePasswords(passwords: PasswordEntry[]): void;
//# sourceMappingURL=data.d.ts.map