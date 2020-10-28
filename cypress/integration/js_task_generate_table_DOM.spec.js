//<reference types=‘cypress’/>

'use strict';

describe('Tests for your table.', () => {
  before(() => {
    cy.visit('/');
  });

  it('First column is a Name with a "name" values.', ()=>{
    cy.get('tbody > tr > :nth-child(1)').contains('Name');
    cy.get('td:nth-child(1)').contains('Carolus Haverbeke');
    cy.get('td:nth-child(1)').contains('Jacobus Bernardus van Brussel');
  });

  it('Second column is a Gender with "male" and "female" values.', ()=>{
    cy.get('tbody > tr > :nth-child(2)').contains('Gender');
    cy.get('td:nth-child(2)').contains('Male');
    cy.get('td:nth-child(2)').contains('Female');
  });

  it('Third column is a Born with "born" values.', ()=>{
    cy.get('tbody > tr > :nth-child(3)').contains('Born');
    cy.get('td:nth-child(3)').contains('1832');
    cy.get('td:nth-child(3)').contains('1736');
  });

  it('Fourth column is a Died with "died" values.', ()=>{
    cy.get('tbody > tr > :nth-child(4)').contains('Died');
    cy.get('td:nth-child(4)').contains('1905');
    cy.get('td:nth-child(4)').contains('1809');
  });

  it('Fifth column is an Age.', ()=>{
    cy.get('tbody > tr > :nth-child(5)').contains('Age');
    cy.get('td:nth-child(5)').contains(`73`);
    cy.get('td:nth-child(5)').contains('63');
  });

  it('Sixth column is a Century.', ()=>{
    cy.get('tbody > tr > :nth-child(6)').contains('Century');
    cy.get('td:nth-child(6)').contains(`20`);
    cy.get('td:nth-child(6)').contains('19');
  });
  
  it('There is no "fatherName", "motherName" and "slug" data in table.', ()=>{
    cy.get('.dashboard').contains('Petrus de Milliano').should('not.exist');
    cy.get('.dashboard').contains('Laurentia van Vlaenderen').should('not.exist');
    cy.get('.dashboard').contains('jan-van-brussel-1714').should('not.exist');
  });
});