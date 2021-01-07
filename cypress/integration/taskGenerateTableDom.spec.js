'use strict';

const people = require('../../src/scripts/lib/people.json');

describe('Generate table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create a table based on people.json file', () => {
    for (let i = 0; i < people.length; i++) {
      cy.contains('tr', people[i].name).contains('td', people[i].born);
      cy.contains('tr', people[i].name).contains('td', people[i].died);

      cy.contains('tr', people[i].name)
        .contains(('td', people[i].died) - ('td', people[i].born));

      cy.contains('tr', people[i].name)
        .contains('td', Math.ceil(people[i].died / 100));

      cy.contains('tr', people[i].name)
        .contains('td', people[i].sex === 'm' ? 'Male' : 'Female');
    }
  });

  it(`shouldn't contain fatherName, motherName and slug in table`, () => {
    cy.get('tbody').contains('Petrus de Milliano').should('not.exist');
    cy.get('tbody').contains('Laurentia van Vlaenderen').should('not.exist');
    cy.get('tbody').contains('jan-van-brussel-1714').should('not.exist');
  });
});
