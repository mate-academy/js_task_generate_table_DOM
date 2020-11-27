'use strict';

Cypress.Commands.add('hasData', (firstValue, secondValue, header) => {
  cy.contains(firstValue).then(($firstValue) => {
    cy.contains(secondValue).then(($secondValue) => {
      cy.contains(header).then(($header) => {
        const firstValuePosition = $firstValue.offset().left;
        const secondValuePosition = $secondValue.offset().left;
        const headerPosition = $header.offset().left;

        expect(headerPosition).to.equal(firstValuePosition);
        expect(headerPosition).to.equal(secondValuePosition);
      });
    });
  });
});

describe('Generate table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain a first column as a Name', () => {
    cy.hasData('Carolus Haverbeke', 'Emma de Milliano', 'Name');
  });

  it('should contain a second column as a Gender', () => {
    cy.hasData('Male', 'Female', 'Gender');
  });

  it('should contain a third column as a Born', () => {
    cy.hasData('1736', '1835', 'Born');
  });

  it('should contain a fourth column as a Died', () => {
    cy.hasData('1809', '1917', 'Died');
  });

  it('should contain a fifth column as an Age', () => {
    cy.hasData('50', '94', 'Age');
  });

  it('should contain a sixth column as a Century', () => {
    cy.hasData('20', '20', 'Century');
  });

  it(`shouldn't contain fatherName, motherName and slug in table`, () => {
    cy.get('tbody').contains('Petrus de Milliano').should('not.exist');
    cy.get('tbody').contains('Laurentia van Vlaenderen').should('not.exist');
    cy.get('tbody').contains('jan-van-brussel-1714').should('not.exist');
  });
});
