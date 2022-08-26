'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableOfPeople = document.querySelector('tbody');

for (let i = 0; i < people.length; i++) {
  const gender = people[i].sex === 'm' ? 'Male' : 'Female';

  const century = String(people[i].died / 100).slice(0, 2);

  tableOfPeople.insertAdjacentHTML('beforeend', `
  <tr>
    <td>
      ${people[i].name}
    </td>
    <td>
      ${gender}
    </td>
    <td>
      ${people[i].born}
    </td>
    <td>
      ${people[i].died}
    </td>
    <td>
      ${people[i].died - people[i].born}
    </td>
    <td>
      ${+century + 1}
    </td>
  </tr>
  `);
}
