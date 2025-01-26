"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = require("./template");
var TemplateGenerator = /** @class */ (function () {
    function TemplateGenerator() {
    }
    TemplateGenerator.generate = function (configuration) {
        return new template_1.default(configuration);
    };
    return TemplateGenerator;
}());
exports.default = TemplateGenerator;
