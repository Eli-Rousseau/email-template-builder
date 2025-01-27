// HTML Component
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
  children?: (Component | string | CSSBlock)[];
}

// CSS Generic Block
interface CSSBlock {
  block: "rule" | "media" | "key-frame" | "font-face";
}

// CSS Rule Block
interface CSSRuleProperty {
  name: string;
  value: string;
}

interface CSSRuleSelector {
  type: "basic" | "relational" | "pseudo-class" | "pseudo-element";
  value: string;
  relation?: CSSRuleSelector;
}

interface CSSRule extends CSSBlock {
  selectors: CSSRuleSelector[];
  properties: CSSRuleProperty[];
}

export { Component, CSSBlock, CSSRule };
