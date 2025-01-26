interface Tag {
  name: string;
  self_clausing: boolean;
}

interface Attribute {
  name: string;
  values: string[];
}

interface Component {
  tag: Tag;
  attributes?: Attribute[];
  children?: Component[] | string;
}

export { Component, Attribute, Tag };
