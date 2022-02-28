// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-tab';
// import './commands';

Cypress.Commands.add('createComponent', (gridOptions, containerStyle = {}, parentEl = null) => {
  cy.document().then((doc) => {
    doc.body.innerHTML = '';
  });
  return cy.window().then((win) => {
    const { document, tui } = win;
    const el = document.createElement('div');
    const styles = { width: '800px', ...containerStyle };

    if (parentEl) {
      parentEl.appendChild(el);
      document.body.appendChild(parentEl);
      cy.wait(10);
    } else {
      Object.assign(el.style, styles);
      document.body.appendChild(el);
    }

    if (gridOptions.theme) {
      const { preset, extOptions } = gridOptions.theme;

      tui.Grid.applyTheme(preset, extOptions);
      delete gridOptions.theme;
    }

    if (Array.isArray(gridOptions.data)) {
      gridOptions.data = deepCopyArray(gridOptions.data);
    }

    win.grid = new tui.Grid({ el, ...gridOptions });

    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve(win.grid);
      });
    });
  });
});
