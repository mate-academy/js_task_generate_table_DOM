'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');
const frag = document.createDocumentFragment();

people.map(person => {
  const tableRow = document.createElement('tr');

  frag.appendChild(tableRow);

  const property = Object.values(person).slice(0, 4);

  property.push(`${person.died - person.born}`);
  property.push(Math.ceil(person.died / 100));

  for (let i = 0; i < 6; i++) {
    const td = document.createElement('td');

    if (property[i] === 'm') {
      td.textContent = 'Male';
    } else if (property[i] === 'f') {
      td.textContent = 'Female';
    } else {
      td.textContent = property[i];
    };
    tableRow.appendChild(td);
  }
  table.appendChild(frag);
});
