'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

people.forEach(person => {
  const human = {};

  human.name = person.name;
  human.gender = person.sex === 'm' ? 'Male' : 'Female';
  human.born = person.born;
  human.died = person.died;
  human.age = human.died - human.born;
  human.century = Math.ceil(human.died / 100);

  createPersonRow(human, table);
});

function createPersonRow(person, element) {
  element.insertAdjacentHTML('beforeend', `
    <tr>
        <td>
            ${person.name}
        </td>
        <td>
            ${person.gender}
        </td>
        <td>
            ${person.born}
        </td>
        <td>
            ${person.died}
        </td>
        <td>
            ${person.age}
        </td>
        <td>
            ${person.century}
        </td>
    </tr>
  `);
}
