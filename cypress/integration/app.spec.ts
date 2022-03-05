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

  const getChildEl = (selector: string) => cy.get(`div.${cls.SELECT_BOX} > ${selector}`);

  it('component initialize(default)', () => {
    createTestComponent();
    const inputEl = getChildEl('div');
    inputEl.should('have.length', '1');
    inputEl.eq(0).should('have.class', cls.INPUT);

    const dropdown = getChildEl('ul');
    dropdown.should('have.length', '1');
    dropdown.eq(0).should('have.class', cls.HIDDEN);
    dropdown.eq(0).should('not.have.class', cls.DROPDOWN);

    const select = getChildEl('select');
    select.should('have.length', '1');
    select.eq(0).should('have.class', cls.HIDDEN);
  });

  it('component initialize(array type data option)', () => {
    createTestComponent();
    const itemLayers = getChildEl('ul').children('li');
    itemLayers.should('have.length', '3');

    getChildEl('ul').children('li').eq(0).should('have.text', 'Apple');
    getChildEl('ul').children('li').eq(1).should('have.text', 'Banana');
    getChildEl('ul').children('li').eq(2).should('have.text', 'Orange');

    const items = getChildEl('select').children('option');
    items.should('have.length', '3');
  });

  it('component initialize(array type data option) disabled', () => {
    createTestComponent();
    const itemLayers = getChildEl('ul').children('li');
    itemLayers.should('have.length', '3');

    getChildEl('ul').children('li').eq(2).should('have.class', 'ui-select-box-disabled');

    const items = getChildEl('select').children('option');
    items.should('have.length', '3');
    getChildEl('select').children('option').eq(2).should('have.attr', 'disabled');
  });

  it('open layer', () => {
    createTestComponent();
    const inputEl = getChildEl('div').eq(0);
    inputEl.click();

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', cls.DROPDOWN);
    dropdown.should('not.have.class', cls.HIDDEN);
  });

  it('close layer', () => {
    createTestComponent();
    const inputEl = getChildEl('div').eq(0);
    inputEl.click();
    inputEl.click();

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', cls.HIDDEN);
    dropdown.should('not.have.class', cls.DROPDOWN);
  });

  it('close layer when document click', () => {
    createTestComponent();

    const inputEl = getChildEl('div').eq(0);
    inputEl.click();

    cy.get('body').click(300, 300, { force: true });

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', cls.HIDDEN);
    dropdown.should('not.have.class', cls.DROPDOWN);
  });

  it('hover layer option', () => {
    createTestComponent();

    const inputEl = getChildEl('div').eq(0);
    inputEl.click();

    const liElement = getChildEl('ul').children('li').eq(0);

    liElement.should('have.class', cls.ITEM);
    liElement.should('not.have.class', cls.HIGHLIGHT);

    liElement.trigger('mouseover');
    liElement.should('have.class', cls.HIGHLIGHT);

    const li2Element = getChildEl('ul').children('li').eq(1);

    li2Element.trigger('mouseover');
    li2Element.should('have.class', cls.HIGHLIGHT);
  });

  it('autofocus option', () => {
    createTestComponent({
      autofocus: true,
    });

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', cls.DROPDOWN);
  });

  it('value option', () => {
    createTestComponent({
      autofocus: true,
      value: 'banana',
    });

    const option = getChildEl('ul').eq(0).children('li').eq(1);

    option.should('have.class', cls.SELECTED);
  });

  it('value option', () => {
    createTestComponent({
      autofocus: true,
      value: 'banana',
    });

    const option1 = getChildEl('ul').eq(0).children('li').eq(0);
    option1.click();
    option1.should('have.class', cls.SELECTED);

    const option2 = getChildEl('ul').eq(0).children('li').eq(1);
    option2.should('not.have.class', cls.SELECTED);
  });
});
