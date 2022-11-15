"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDate_1 = __importDefault(require("../getDate"));
describe("#getDate", () => {
    it("should return the current date as a string", () => {
        const date = (0, getDate_1.default)();
        expect(typeof date).toBe("string");
    });
    it("should not return the time", () => {
        const date = (0, getDate_1.default)();
        expect(date).not.toContain(new Date().toTimeString());
    });
    it("should return the date in DD/MM/YY format", () => {
        const date = (0, getDate_1.default)();
        expect(date).toMatch(/\d{2}\/\d{2}\/\d{2}/);
    });
});
