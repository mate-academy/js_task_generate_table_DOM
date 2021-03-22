'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const person of people) {
  let gender;

  if (person.sex === 'f') {
    gender = 'Female';
  } else {
    gender = 'Male';
  }

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>
        ${person.name}
      </td>
      <td>
        ${gender}
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
    </tr>
 `);
}
