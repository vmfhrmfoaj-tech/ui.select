/// <reference path="../../node_modules/cypress-plugin-tab/src/index.d.ts" />

declare namespace Cypress {
  interface Chainable<Subject> {
    createComponent(gridOptions: any, elementStyles?: any, parentEl?: HTMLElement): Chainable<any>;

    getInstance(): Chainable<any>;

    getItemByIndex(index: number): Chainable<any>;
  }
}

declare namespace Chai {
  interface Include {
    subset(subset: any): Assertion;
  }
}
