'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
    <td>
      ${person.name}
    </td>
    <td>
      ${person.sex === 'm' ? 'Male' : 'Female'}
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
    </td>
  `);

  table.append(row);
}
