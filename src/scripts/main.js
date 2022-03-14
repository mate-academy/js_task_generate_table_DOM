'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
let index = 1;

people.forEach(person => {
  const row = table.insertRow(index++);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.innerHTML = person.name;
  cell2.innerHTML = person.sex === 'm' ? 'Male' : 'Female';
  cell3.innerHTML = person.born;
  cell4.innerHTML = person.died;
  cell5.innerHTML = person.died - person.born;
  cell6.innerHTML = Math.ceil(person.died / 100);
});
