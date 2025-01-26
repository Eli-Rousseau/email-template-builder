"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator/generator");
var configuration = {
    tag: {
        name: "div",
    },
    attributes: [
        { name: "class", values: ["blue", "button"] },
        { name: "id", values: ["input"] },
    ],
    children: [
        {
            tag: {
                name: "p",
            },
            children: "Some text in here",
        },
    ],
};
var my_template = generator_1.default.generate(configuration);
console.log(my_template.structure());
