'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const columns = ['name', 'sex', 'born', 'died', 'age', 'century'];

for (const person of people) {
  const personRow = document.createElement('tr');

  table.append(personRow);

  for (const property of columns) {
    const propertyElement = document.createElement('td');

    propertyElement.textContent = person[property];

    if (person.hasOwnProperty(property)) {
      if (property === 'sex' && person[property] === 'f') {
        propertyElement.textContent = 'Female';
      } else if (property === 'sex' && person[property] === 'm') {
        propertyElement.textContent = 'Male';
      }
      personRow.append(propertyElement);
    }
  }

  const personAge = document.createElement('td');

  personAge.textContent = person.died - person.born;

  const personCentury = document.createElement('td');

  personCentury.textContent = Math.ceil(person.died / 100);
  personRow.append(personAge);
  personRow.append(personCentury);
}
