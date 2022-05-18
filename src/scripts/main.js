'use strict';

// import people from './lib/people.json';
const people = require('./lib/people.json');

const table = document.querySelector('.dashboard');

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
  <tr>
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
    </td>
  </tr>
`);
}
