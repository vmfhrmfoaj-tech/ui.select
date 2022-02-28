/// <reference path="../../node_modules/cypress-plugin-tab/src/index.d.ts" />

declare namespace Cypress {
  type RowHeaderType = '_checked' | '_number' | '_draggable';
  type RowKey = number | string;

  interface Chainable<Subject> {
    createComponent(gridOptions: any, elementStyles?: any, parentEl?: HTMLElement): Chainable<any>;
  }
}

declare namespace Chai {
  interface Include {
    subset(subset: any): Assertion;
  }
}
