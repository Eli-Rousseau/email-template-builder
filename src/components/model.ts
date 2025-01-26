interface Tag {
  name: string;
  self_clausing: boolean;
}

interface Style {
  name: string;
  value: string;
}

interface Attribute {
  name: string;
  values: string[] | Style[];
}

interface Component {
  tag: Tag;
  attributes?: Attribute[];
  children?: Component[] | string | (Component | string)[];
}

export { Component, Attribute, Tag, Style };
