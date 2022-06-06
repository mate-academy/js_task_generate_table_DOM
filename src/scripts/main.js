'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('table');

for (const person of people) {
  const row = document.createElement('tr');

  const cellname = document.createElement('td');
  const sex = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  cellname.textContent = person.name;

  (person.sex === 'm') ? sex.textContent = 'Male'
    : sex.textContent = 'Female';

  born.textContent = person.born;

  died.textContent = person.died;

  age.textContent = person.died - person.born;

  century.textContent = Math.ceil(person.died / 100);

  row.append(cellname);
  row.append(sex);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);

  table.append(row);
};
