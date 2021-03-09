'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person in people) {
  const row = createCell('tr', table);

  createCell('td', row, people[person].name);

  const gender = (people[person].sex === 'm')
    ? 'Male'
    : 'Female';

  createCell('td', row, gender);
  createCell('td', row, people[person].born);
  createCell('td', row, people[person].died);

  const age = people[person].died - people[person].born;

  createCell('td', row, age);

  const century = Math.ceil(people[person].died / 100);

  createCell('td', row, century);
}

function createCell(element, parentElement, content) {
  const row = document.createElement(element);

  parentElement.append(row);

  if (content) {
    row.textContent = content;
  }

  return row;
}
