'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
function createAndAppendNewCell(value, parentTag, personItem) {
  const newItem = document.createElement('td');

  switch (value) {
    case 'age':
      newItem.innerText = personItem.died - personItem.born;
      break;
    case 'century':
      newItem.innerText = Math.ceil(personItem.died / 100);
      break;
    default:
      newItem.innerText = personItem[value];
      break;
  }

  parentTag.appendChild(newItem);
}

function generateTable(table) {
  const types = ['name', 'sex', 'born', 'died', 'age', 'century'];

  for (const person of people) {
    const newRow = document.createElement('tr');

    types.forEach(type => createAndAppendNewCell(type, newRow, person));

    table.appendChild(newRow);
  }
}

const dashboard = document.querySelector('.dashboard');

generateTable(dashboard);
