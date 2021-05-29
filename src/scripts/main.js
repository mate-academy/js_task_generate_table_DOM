'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

function addingPerson(person) {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
  <th>${person.name}</th>
  <th>${person.sex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.died - person.born}</th>
  <th>${(person.born / 100).toFixed(0)}</th>
`;

  Array.from(document.querySelectorAll('.dashboard'))[0]
    .append(newRow);
}

people.map(person => {
  addingPerson(person);
});
