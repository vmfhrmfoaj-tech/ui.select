// app.spec.ts
before(() => {
  cy.visit('/dist');
});

describe('className', () => {
  beforeEach(() => {
    cy.createComponent({});
  });

  const getChildEl = (selector: string) => cy.get(`div.tui-select-box > ${selector}`);

  it('component initialize(default)', () => {
    const inputEl = getChildEl('div');
    inputEl.should('have.length', '1');
    inputEl.eq(0).should('have.class', 'tui-select-box-input');

    const dropdown = getChildEl('ul');
    dropdown.should('have.length', '1');
    dropdown.eq(0).should('have.class', 'tui-select-box-hidden');
    dropdown.eq(0).should('not.have.class', 'tui-select-box-dropdown');

    const select = getChildEl('select');
    select.should('have.length', '1');
    select.eq(0).should('have.class', 'tui-select-box-hidden');
  });

  it('open layer', () => {
    const inputEl = getChildEl('div').eq(0);
    inputEl.click();

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', 'tui-select-box-dropdown');
    dropdown.should('not.have.class', 'tui-select-box-hidden');
  });

  it('close layer', () => {
    const inputEl = getChildEl('div').eq(0);
    inputEl.click();
    inputEl.click();

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', 'tui-select-box-hidden');
    dropdown.should('not.have.class', 'tui-select-box-dropdown');
  });

  it('close layer when document click', () => {
    const inputEl = getChildEl('div').eq(0);
    inputEl.click();

    cy.get('body').click(300, 300, { force: true });

    const dropdown = getChildEl('ul').eq(0);

    dropdown.should('have.class', 'tui-select-box-hidden');
    dropdown.should('not.have.class', 'tui-select-box-dropdown');
  });
});
