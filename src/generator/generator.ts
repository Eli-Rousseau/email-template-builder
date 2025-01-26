import { Component } from "../components/model";
import Template from "./template";

class TemplateGenerator {
  private constructor() {}

  static generate(configuration: Component) {
    return new Template(configuration);
  }
}

export default TemplateGenerator;
