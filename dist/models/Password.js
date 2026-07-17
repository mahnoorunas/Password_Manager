"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passwordSchema = new mongoose_1.default.Schema({
    account: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    strength: {
        type: String,
        required: true,
    },
    breached: {
        type: Boolean,
        required: true,
    },
});
const Password = mongoose_1.default.model("Password", passwordSchema);
exports.default = Password;
//# sourceMappingURL=Password.js.map