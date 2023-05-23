'use strict';

const people = require('./lib/people');

function getSex(obj) {
  return obj.sex === 'm' ? 'Male' : 'Female';
}

function getAge(obj) {
  const age = obj.died - obj.born;

  return age;
}

function getCentury(obj) {
  const century = Math.ceil(obj.died / 100);

  return century;
}

for (const person of people) {
  const table = document.querySelector('.dashboard');
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('beforeend',
    `<td>
      ${person.name}
    </td>

    <td>
      ${getSex(person)}
    </td>

    <td>
      ${person.born}
    </td>

    <td>
      ${person.died}
    </td>

    <td>
      ${getAge(person)}
    </td>

    <td>
      ${getCentury(person)}
    </td>
    `
  );

  table.append(tableRow);
}
