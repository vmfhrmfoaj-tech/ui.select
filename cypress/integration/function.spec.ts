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
    createTestComponent({ autofocus: true });

    cy.getInstance().invoke('setValue', 'banana');

    cy.getItemByIndex(0).should('not.have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('have.class', cls.SELECTED);

    cy.getInstance().invoke('setValue', 'apple');

    cy.getItemByIndex(0).should('have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('not.have.class', cls.SELECTED);

    cy.getInstance().invoke('setValue', 'orange');

    cy.getItemByIndex(0).should('not.have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('not.have.class', cls.SELECTED);
    cy.getItemByIndex(2).should('have.class', cls.SELECTED);

    cy.getInstance().invoke('setValue', 'wrong value');

    cy.getItemByIndex(0).should('not.have.class', cls.SELECTED);
    cy.getItemByIndex(1).should('not.have.class', cls.SELECTED);
  });

  it('getValue', () => {
    createTestComponent({ autofocus: true });

    cy.getInstance().invoke('setValue', 'banana');
    cy.getInstance().invoke('getValue').should('eq', 'banana');

    cy.getInstance().invoke('setValue', 'apple');
    cy.getInstance().invoke('getValue').should('eq', 'apple');

    cy.getInstance().invoke('setValue', 'orange');
    cy.getInstance().invoke('getValue').should('eq', 'orange');

    cy.getInstance().invoke('setValue', 'banana');
    cy.getInstance().invoke('setValue', 'wrong value');
    cy.getInstance().invoke('getValue').should('eq', 'wrong value');
  });
});
