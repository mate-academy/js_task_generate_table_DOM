import people from '../../src/scripts/lib/people.json';

describe('Generate table app', () => {
  beforeEach(() => {
    cy.visit('https://Stepan31.github.io/js_task_generate_table_DOM/');
  });

  it('should create a table based on people.json file', () => {
    people.forEach((person) => {
      cy.contains('tr', person.name).within(() => {
        cy.contains('td', person.born);
        cy.contains('td', person.died);

        const age = person.died - person.born;

        cy.contains('td', age);

        const century = Math.ceil(person.born / 100);

        cy.contains('td', century);

        const gender = person.sex === 'm' ? 'Male' : 'Female';

        cy.contains('td', gender);
      });
    });
  });

  it('should not contain fatherName, motherName, or slug in any row', () => {
    cy.get('.dashboard tbody')
      .find('tr')
      .each(($row) => {
        cy.wrap($row).should('not.contain.text', 'fatherName');
        cy.wrap($row).should('not.contain.text', 'motherName');
        cy.wrap($row).should('not.contain.text', 'slug');
      });
  });
});
