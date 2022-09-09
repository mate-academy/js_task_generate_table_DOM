'use strict';

const people = require('./lib/people');
const table = document.getElementsByClassName('dashboard ')[0]
  .getElementsByTagName('tbody')[0];
const resultPeople = people.map(person =>
  ` <tr>
      <td>
        ${person.name}
      </td>
      <td>
        ${gender(person)}
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
  `)
  .join('');

function gender(person) {
  if (person.sex === 'm') {
    return 'Male';
  }

  return 'Female';
}

table.insertAdjacentHTML('beforeend', resultPeople);
