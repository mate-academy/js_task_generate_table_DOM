'use strict';

const people = require('./lib/people');
const tableRef = document.getElementsByClassName('dashboard')[0];

for (const person of people) {
  const newRow = tableRef.insertRow(-1);
  const newCell1 = newRow.insertCell(0);

  newCell1.innerText = `${person.name}`;

  const newCell2 = newRow.insertCell(1);

  newCell2.innerText = `${person.sex === 'm' ? 'Male' : 'Female'}`;

  const newCell3 = newRow.insertCell(2);

  newCell3.innerText = `${person.born}`;

  const newCell4 = newRow.insertCell(3);

  newCell4.innerText = `${person.died}`;

  const newCell5 = newRow.insertCell(4);

  newCell5.innerText = `${person.died - person.born}`;

  const newCell6 = newRow.insertCell(5);

  newCell6.innerText = `${Math.ceil(person.died / 100) - 1}`;
}
