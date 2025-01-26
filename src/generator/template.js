"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Template = /** @class */ (function () {
    function Template(configuration) {
        this.configuration = configuration;
    }
    Template.prototype.structure = function () {
        return this.generate_tag(this.configuration);
    };
    Template.prototype.generate_tag = function (component) {
        var _this = this;
        if (!component.tag) {
            return "";
        }
        var attributes = " ";
        if (!component.attributes) {
            attributes = "";
        }
        else if (Array.isArray(component.attributes)) {
            attributes += component.attributes
                .map(function (attribute) { return "".concat(attribute.name, "=\"").concat(attribute.values.join(" "), "\""); })
                .join(" ");
        }
        var children = "";
        if (typeof component.children === "string") {
            children = component.children;
        }
        else if (Array.isArray(component.children)) {
            children = component.children
                .map(function (child) {
                return _this.generate_tag(child);
            })
                .join("");
        }
        return "<".concat(component.tag, " ").concat(attributes, ">").concat(children, "</").concat(component.tag, ">");
    };
    return Template;
}());
exports.default = Template;
