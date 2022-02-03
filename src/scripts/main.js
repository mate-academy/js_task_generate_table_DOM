'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (const person of people) {
  const row = document.createElement('tr');
  const column1 = document.createElement('td');
  const column2 = document.createElement('td');
  const column3 = document.createElement('td');
  const column4 = document.createElement('td');
  const column5 = document.createElement('td');
  const column6 = document.createElement('td');

  column1.textContent = person.name;

  if (person.sex === 'f') {
    column2.textContent = 'Female';
  } else {
    column2.textContent = 'Male';
  };

  column3.textContent = person.born;
  column4.textContent = person.died;
  column5.textContent = person.died - person.born;
  column6.textContent = Math.ceil(person.died / 100);

  table.append(row);
  row.append(column1);
  row.append(column2);
  row.append(column3);
  row.append(column4);
  row.append(column5);
  row.append(column6);
};
