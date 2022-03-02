// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createComponent', (options, containerStyle = {}, parentEl = null) => {
  cy.document().then((doc) => {
    doc.body.innerHTML = '';
  });
  return cy.window().then((win) => {
    const { document, ui } = win;
    const el = document.createElement('div');
    const styles = { width: '200px', ...containerStyle };

    if (parentEl) {
      parentEl.appendChild(el);
      document.body.appendChild(parentEl);
      cy.wait(10);
    } else {
      Object.assign(el.style, styles);
      document.body.appendChild(el);
    }

    win.component = new ui.Select({ el, ...options });

    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve(win.component);
      });
    });
  });
});
