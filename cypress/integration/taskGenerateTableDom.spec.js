'use strict';

Cypress.Commands.add('tableInputs', (fvalue, svalue, value) => {
  cy.contains(fvalue).then(($fvalue) => {
    cy.contains(svalue).then(($svalue) => {
      cy.contains(value).then(($value) => {
        const child1 = $fvalue.get(0).offsetLeft;
        const child2 = $svalue.get(0).offsetLeft;
        const main = $value.get(0).offsetLeft;

        expect(main).to.equal(child1);
        expect(main).to.equal(child2);
      });
    });
  });
});

describe('Genetate table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain a first column as a Name', () => {
    cy.tableInputs('Carolus Haverbeke', 'Emma de Milliano', 'Name');
  });

  it('should contain a second column as a Gender', () => {
    cy.tableInputs('Male', 'Female', 'Gender');
  });

  it('should contain a third column as a Born', () => {
    cy.tableInputs('1736', '1835', 'Born');
  });

  it('should contain a fourth column as a Died', () => {
    cy.tableInputs('1809', '1917', 'Died');
  });

  it('should contain a fifth column as an Age', () => {
    cy.tableInputs('50', '94', 'Age');
  });

  it('should contain a sixth column as a Century', () => {
    cy.tableInputs('20', '20', 'Century');
  });

  it('shouldn`t contain fatherName, motherName and slug in table', () => {
    cy.get('tbody').contains('Petrus de Milliano').should('not.exist');
    cy.get('tbody').contains('Laurentia van Vlaenderen').should('not.exist');
    cy.get('tbody').contains('jan-van-brussel-1714').should('not.exist');
  });
});
