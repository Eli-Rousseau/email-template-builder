import { Component, Attribute, Tag } from "../components/model";

class Template {
  private configuration: Component;
  private spaces: string;

  constructor(configuration: Component) {
    this.configuration = configuration;
    this.spaces = "  ";
  }

  public construct(): string {
    return this.generateComponent(this.configuration, 0);
  }

  private generateComponent(
    component: Component | string,
    level: number
  ): string {
    const indent: string = this.spaces.repeat(level);

    if (typeof component === "string") {
      return indent + component;
    }

    if (!component.tag) {
      return "";
    }

    const attributes: string = this.generateComponentAttributes(component);

    if (component.tag.self_clausing) {
      return `${indent}<${component.tag.name}${attributes} />`;
    }

    let children: string = this.generateComponentChildren(component, level);

    if (Array.isArray(component.children)) {
      return `${indent}<${component.tag.name}${attributes}>\n${children}\n${indent}</${component.tag.name}>`;
    }

    return `${indent}<${component.tag.name}${attributes}>${children}</${component.tag.name}>`;
  }

  private generateComponentAttributes(component: Component): string {
    let attributes: string = "";
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

  private generateComponentChildren(
    component: Component,
    level: number
  ): string {
    const indent: string = this.spaces.repeat(level);

    let children: string = "";
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
      } else {
        children = component.children;
      }
    } else if (Array.isArray(component.children)) {
      children = component.children
        .map((child) => {
          return this.generateComponent(child, level + 1);
        })
        .join("\n");
    }

    return children;
  }
}

export default Template;
