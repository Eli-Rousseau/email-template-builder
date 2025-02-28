"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(require("./template"));
class TemplateGenerator {
    constructor() { }
    static generate(configuration) {
        return new template_1.default(configuration);
    }
}
exports.default = TemplateGenerator;
