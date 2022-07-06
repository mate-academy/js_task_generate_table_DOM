'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

for (const { name: personName, sex, born, died } of people) {
  const fixedSex = sex === 'm' ? 'Male' : 'Female';

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>
        ${personName}
      </td>
      <td>
        ${fixedSex}
      </td>
      <td>
        ${born}
      </td>
      <td>
        ${died}
      </td>
      <td>
        ${died - born}
      </td>
      <td>
        ${Math.ceil(died / 100)}
      </td>
    </tr>
  `);
}
