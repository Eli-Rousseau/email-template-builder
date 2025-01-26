import { Component } from "../components/model";

class Template {
  private configuration: Component;

  constructor(configuration: Component) {
    this.configuration = configuration;
  }

  public construct(): string {
    return this.generate_tag(this.configuration, 0);
  }

  private generate_tag(component: Component, level: number): string {
    if (!component.tag) {
      return "";
    }

    const indent = "  ".repeat(level);

    let attributes: string = "";
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

    let children: string = "";
    if (typeof component.children === "string") {
      children = component.children;
    } else if (Array.isArray(component.children)) {
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

export default Template;
