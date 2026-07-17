"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB() {
    try {
        await mongoose_1.default.connect("mongodb://127.0.0.1:27017/password_manager");
        console.log("✅ MongoDB Connected");
    }
    catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error);
    }
}
//# sourceMappingURL=connection.js.map