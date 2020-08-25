'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  table.insertRow().insertAdjacentHTML(
    'afterbegin', `
    <tr>
      <td>
        ${people[i].name}
      </td>
      <td>
        ${people[i].sex === 'm' ? 'Male' : 'Female'}
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
        ${Math.ceil(people[i].died / 100)}
      </td>
    </tr>
  `);
}
