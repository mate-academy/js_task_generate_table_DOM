'use strict';

const people = require('./lib/people');

people.map(person => {
  delete person.fatherName;
  delete person.motherName;
  delete person.slug;

  if (person.sex === 'm') {
    person.sex = 'male';
  } else {
    person.sex = 'female';
  }

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
});

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  for (const element in person) {
    const tableCell = document.createElement('td');

    tableCell.innerText = person[element];
    tableRow.append(tableCell);
  }

  table.append(tableRow);
}
