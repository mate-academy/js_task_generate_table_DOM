'use strict';

const people = require('./lib/people');
const tableRef = document.getElementsByClassName('dashboard')[0];

for (const person of people) {
  const newRow = tableRef.insertRow(-1);

  newRow.insertAdjacentHTML('beforeend', '<td>' + `${person.name}` + '</td>');

  newRow.insertAdjacentHTML('beforeend', '<td>'
  + `${person.sex === 'm' ? 'Male' : 'Female'}` + '</td>');
  newRow.insertAdjacentHTML('beforeend', '<td>' + `${person.born}` + '</td>');
  newRow.insertAdjacentHTML('beforeend', '<td>' + `${person.died}` + '</td>');

  newRow.insertAdjacentHTML('beforeend', '<td>'
  + `${person.died - person.born}` + '</td>');

  newRow.insertAdjacentHTML('beforeend', '<td>'
  + `${Math.ceil(person.died / 100)}` + '</td>');
}
