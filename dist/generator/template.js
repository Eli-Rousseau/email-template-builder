"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Template {
    constructor(configuration) {
        this.configuration = configuration;
        this.spaces = "  ";
    }
    construct() {
        return this.generateComponents(this.configuration, 0);
    }
    generateComponents(component, level) {
        const indent = this.spaces.repeat(level);
        if (typeof component === "string") {
            return indent + component;
        }
        if (!component.tag) {
            return "";
        }
        const attributes = this.generateComponentAttributes(component);
        if (component.tag.self_clausing) {
            return `${indent}<${component.tag.name}${attributes} />`;
        }
        let children = this.generateComponentChildren(component, level);
        if (Array.isArray(component.children)) {
            return `${indent}<${component.tag.name}${attributes}>\n${children}\n${indent}</${component.tag.name}>`;
        }
        return `${indent}<${component.tag.name}${attributes}>${children}</${component.tag.name}>`;
    }
    generateComponentAttributes(component) {
        let attributes = "";
        if (component.attributes && Array.isArray(component.attributes)) {
            attributes =
                " " +
                    component.attributes
                        .map((attr) => {
                        if (attr.name === "style") {
                            return `${attr.name}="${attr.values
                                .map((style) => {
                                if (typeof style === "string") {
                                    return style;
                                }
                                return style.name + ": " + style.value;
                            })
                                .join("; ")}"`;
                        }
                        return `${attr.name}="${attr.values.join(" ")}"`;
                    })
                        .join(" ");
        }
        return attributes;
    }
    generateComponentChildren(component, level) {
        const indent = this.spaces.repeat(level);
        let children = "";
        if (typeof component.children === "string") {
            if (component.tag.name === "script") {
                let codeLines = component.children.split("\n");
                children =
                    "\n" +
                        indent +
                        this.spaces +
                        codeLines
                            .map((line) => line.replace(/\t/g, this.spaces))
                            .join("\n" + indent + this.spaces) +
                        "\n" +
                        indent;
            }
            else {
                children = component.children;
            }
        }
        else if (Array.isArray(component.children)) {
            children = component.children
                .map((child) => {
                return this.generateComponents(child, level + 1);
            })
                .join("\n");
        }
        return children;
    }
}
exports.default = Template;
