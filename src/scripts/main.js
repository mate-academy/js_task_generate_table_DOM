'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

function addRow(arg) {
  const table = document.querySelector('table');

  for (const person of people) {
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    `;
  }
}

addRow('table');
