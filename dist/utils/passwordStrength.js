"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkPasswordStrength;
function checkPasswordStrength(password) {
    let score = 0;
    if (password.length >= 8)
        score++;
    if (/[A-Z]/.test(password))
        score++;
    if (/[a-z]/.test(password))
        score++;
    if (/[0-9]/.test(password))
        score++;
    if (/[^A-Za-z0-9]/.test(password))
        score++;
    if (score === 5) {
        return "Strong";
    }
    if (score >= 3) {
        return "Medium";
    }
    return "Weak";
}
//# sourceMappingURL=passwordStrength.js.map