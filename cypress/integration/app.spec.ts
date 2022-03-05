// app.spec.ts

import { cls } from '../../src/css/constants';

before(() => {
  cy.visit('/dist');
});

describe('className', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeEach(() => {});

  const createTestComponent = (option = {}) => {
    const items = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange', disabled: true },
    ];
    cy.createComponent({ ...option, items });
  };

  it('component initialize(default)', () => {
    createTestComponent();

    const inputEl = cy.getInputEl();
    inputEl.should('have.length', '1');
    inputEl.eq(0).should('have.class', cls.INPUT);

    const dropdown = cy.getDropdownEl();
    dropdown.should('have.length', '1');
    dropdown.eq(0).should('have.class', cls.HIDDEN);
    dropdown.eq(0).should('not.have.class', cls.DROPDOWN);

    const select = cy.getNativeEl();
    select.should('have.length', '1');
    select.eq(0).should('have.class', cls.HIDDEN);
  });

  it('component initialize(array type data option)', () => {
    createTestComponent();
    const itemLayers = cy.getDropdownEl().children('li');
    itemLayers.should('have.length', '3');

    cy.getItemByIndex(0).should('have.text', 'Apple');
    cy.getItemByIndex(1).should('have.text', 'Banana');
    cy.getItemByIndex(2).should('have.text', 'Orange');

    const items = cy.getNativeEl().children('option');
    items.should('have.length', '3');
  });

  it('component initialize(array type data option) disabled', () => {
    createTestComponent();
    const itemLayers = cy.getDropdownEl().children('li');
    itemLayers.should('have.length', '3');

    cy.getItemByIndex(2).should('have.class', 'ui-select-box-disabled');

    const items = cy.getNativeEl().children('option');
    items.should('have.length', '3');
    items.eq(2).should('have.attr', 'disabled');
  });

  it('open layer', () => {
    createTestComponent();
    const inputEl = cy.getInputEl();
    inputEl.click();

    const dropdown = cy.getDropdownEl();

    dropdown.should('have.class', cls.DROPDOWN);
    dropdown.should('not.have.class', cls.HIDDEN);
  });

  it('close layer', () => {
    createTestComponent();
    const inputEl = cy.getInputEl();
    inputEl.click();
    inputEl.click();

    const dropdown = cy.getDropdownEl();

    dropdown.should('have.class', cls.HIDDEN);
    dropdown.should('not.have.class', cls.DROPDOWN);
  });

  it('close layer when document click', () => {
    createTestComponent();

    const inputEl = cy.getInputEl();
    inputEl.click();

    cy.get('body').click(300, 300, { force: true });

    const dropdown = cy.getDropdownEl();

    dropdown.should('have.class', cls.HIDDEN);
    dropdown.should('not.have.class', cls.DROPDOWN);
  });

  it('hover layer option', () => {
    createTestComponent();

    const inputEl = cy.getInputEl();
    inputEl.click();

    const liElement = cy.getItemByIndex(0);

    liElement.should('have.class', cls.ITEM);
    liElement.should('not.have.class', cls.HIGHLIGHT);

    liElement.trigger('mouseover');
    liElement.should('have.class', cls.HIGHLIGHT);

    const li2Element = cy.getItemByIndex(1);

    li2Element.trigger('mouseover');
    li2Element.should('have.class', cls.HIGHLIGHT);
  });

  it('autofocus option', () => {
    createTestComponent({
      autofocus: true,
    });

    const dropdown = cy.getDropdownEl();

    dropdown.should('have.class', cls.DROPDOWN);
  });

  it('value option', () => {
    createTestComponent({
      autofocus: true,
      value: 'banana',
    });

    const option = cy.getItemByIndex(1);

    option.should('have.class', cls.SELECTED);
  });

  it('value option', () => {
    createTestComponent({
      autofocus: true,
      value: 'banana',
    });

    const option1 = cy.getItemByIndex(0);
    option1.click();
    option1.should('have.class', cls.SELECTED);

    const option2 = cy.getItemByIndex(1);
    option2.should('not.have.class', cls.SELECTED);
  });
});
