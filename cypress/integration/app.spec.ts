// app.spec.ts
before(() => {
  cy.visit('/dist');
});

describe('className', () => {
  beforeEach(() => {
    cy.createComponent({});
  });
});
