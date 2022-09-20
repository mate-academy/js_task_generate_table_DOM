'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
function createAndAppendNewCell(value, parentTag, personItem) {
  const newItem = document.createElement('td');

  if (value === 'age') {
    newItem.innerText = personItem.died - personItem.born;
  } else if (value === 'century') {
    newItem.innerText = Math.ceil(personItem.died / 100);
  } else {
    newItem.innerText = personItem[value];
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
