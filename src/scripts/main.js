'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');
const columns = [...document.querySelectorAll('th')];

for (const person of people) {
  const row = document.createElement('tr');

  for (const column in columns) {
    const cell = document.createElement('td');
    const property = columns[column].textContent.toLowerCase();

    if (person.hasOwnProperty(property)) {
      cell.textContent = person[property];
    } else {
      cell.textContent = getProperty(property, person);
    }
    row.append(cell);
  }
  dashboard.append(row);
}

function getProperty(property, person) {
  switch (property) {
    case 'gender':
      return person.sex === 'f' ? 'Female' : 'Male';
    case 'age':
      return person.died - person.born;
    case 'century':
      return Math.ceil(person.died / 100);
  }
}
