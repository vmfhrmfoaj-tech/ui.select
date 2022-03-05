// app.spec.ts
import { cls } from '../../src/css/constants';

before(() => {
  cy.visit('/dist');
});

describe('user function', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeEach(() => {});

  const createTestComponent = (option = {}) => {
    const items = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange', disabled: true },
    ];
    return cy.createComponent({ ...option, items });
  };

  it('setValue', () => {
    createTestComponent();

    cy.getInstance().invoke('setValue', 'banana');

    cy.getItemByIndex(0).should('not.have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('have.class', cls.SELECTED);

    cy.getInstance().invoke('setValue', 'apple');

    cy.getItemByIndex(0).should('have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('not.have.class', cls.SELECTED);
  });
});
