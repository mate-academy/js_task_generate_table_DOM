'use strict';

const people = require('./lib/people');
const tableRef = document.querySelector('table');

tableRef.setAttribute('id', 'peopleList');

function addRow(table) {
  for (const person of people) {
    const newRow = tableRef.insertRow(-1);
    const names = newRow.insertCell(0);
    const gender = newRow.insertCell(1);
    const born = newRow.insertCell(2);
    const died = newRow.insertCell(3);
    const age = newRow.insertCell(4);
    const century = newRow.insertCell(5);

    names.innerHTML = person.name;
    gender.innerHTML = person.sex === 'm' ? 'Male' : 'Female';
    born.innerHTML = person.born;
    died.innerHTML = person.died;
    age.innerHTML = (person.died - person.born);
    century.innerHTML = Math.ceil(person.died / 100);
  };
}
addRow();
