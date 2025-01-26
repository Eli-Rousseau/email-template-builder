"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = __importDefault(require("./generator/generator"));
const configuration = {
    tag: {
        name: "div",
        self_clausing: false,
    },
    attributes: [
        { name: "class", values: ["blue", "button"] },
        { name: "id", values: ["input"] },
    ],
    children: [
        {
            tag: {
                name: "p",
                self_clausing: false,
            },
            children: "Some text in here",
        },
        {
            tag: {
                name: "div",
                self_clausing: false,
            },
            children: [
                {
                    tag: {
                        name: "img",
                        self_clausing: true,
                    },
                    attributes: [
                        {
                            name: "src",
                            values: ["./assets/img.png"],
                        },
                        {
                            name: "alt",
                            values: ["Just an image"],
                        },
                    ],
                },
            ],
        },
    ],
};
const my_template = generator_1.default.generate(configuration);
console.log(my_template.construct());
