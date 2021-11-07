'use strict';

const people = require('./lib/people');
const rows = people
  .map(person => {
    const tr = document.createElement('tr');
    const td = `
      <td>
        ${person.name}
      </td>
      <td>
        ${person.sex}
      </td>
      <td>
        ${person.born}
      </td>
      <td>
        ${person.died}
      </td>
      <td>
        ${person.died - person.born}
      </td>
      <td>
        ${Math.ceil(person.died / 100)}
      </td>`;

    tr.innerHTML = td;

    return tr;
  });
const table = document
  .querySelector('.dashboard');

rows
  .map(row =>
    table.append(row));
