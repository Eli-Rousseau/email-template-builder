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
      children: [
        "Some",
        { tag: { name: "em", self_clausing: false }, children: "italic text" },
        "In here",
      ],
    },
    {
      tag: {
        name: "div",
        self_clausing: false,
      },
      attributes: [
        {
          name: "class",
          values: ["container", "box", "shadow"],
        },
        {
          name: "style",
          values: [
            { name: "color", value: "white" },
            { name: "padding", value: "2px" },
            { name: "border-radius", value: "5px" },
          ],
        },
      ],
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
    {
      tag: {
        name: "script",
        self_clausing: false,
      },
      children:
        'document.getElementById("fileInput").addEventListener("change", function(event) {\n\tconst file = event.target.files[0];\n\n\tif (file) {\n\t\tconst reader = new FileReader();\n\t\treader.onload = function(e) {\n\t\t\tconst htmlString = e.target.result;\n\t\t\tdocument.getElementById("output").textContent = htmlString;\n\t\t\tconsole.log(htmlString);\n\t\t};\n\t\treader.readAsText(file); // Convert file to text (string)\n\t}\n});',
    },
  ],
};

const my_template = TemplateGenerator.generate(configuration);
console.log(my_template.construct());
