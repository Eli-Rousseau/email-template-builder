"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Template {
    constructor(configuration) {
        this.configuration = configuration;
    }
    construct() {
        return this.generate_tag(this.configuration, 0);
    }
    generate_tag(component, level) {
        if (!component.tag) {
            return "";
        }
        const indent = "  ".repeat(level);
        let attributes = "";
        if (component.attributes && Array.isArray(component.attributes)) {
            attributes =
                " " +
                    component.attributes
                        .map((attr) => `${attr.name}="${attr.values.join(" ")}"`)
                        .join(" ");
        }
        if (component.tag.self_clausing) {
            return `${indent}<${component.tag.name}${attributes} />`;
        }
        let children = "";
        if (typeof component.children === "string") {
            children = component.children;
        }
        else if (Array.isArray(component.children)) {
            children = component.children
                .map((child) => this.generate_tag(child, level + 1))
                .join("\n");
        }
        if (Array.isArray(component.children)) {
            return `${indent}<${component.tag.name}${attributes}>\n${children}\n${indent}</${component.tag.name}>`;
        }
        return `${indent}<${component.tag.name}${attributes}>${children}</${component.tag.name}>`;
    }
}
exports.default = Template;
