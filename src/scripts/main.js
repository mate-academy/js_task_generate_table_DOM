'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

for (const person of people) {
  let sex = person.sex;
  const age = person.died - person.born;
  const century = Math.floor(person.died / 100);

  if (person.sex === 'm') {
    sex = 'Male';
  } else {
    sex = 'Female';
  }

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>
      ${person.name}
    </td>
    <td>
      ${sex}
    </td>
    <td>
      ${person.born}
    </td>
    <td>
      ${person.died}
    </td>
    <td>
      ${age}
    </td>
    <td>
      ${century}
    </td>
  </tr>
`);
}
