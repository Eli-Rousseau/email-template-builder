import TemplateGenerator from "./generator/generator";
import { Component } from "./components/model";

const configuration: Component = {
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

const my_template = TemplateGenerator.generate(configuration);
console.log(my_template.construct());
