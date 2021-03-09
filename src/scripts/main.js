'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
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
  `);

  dashboard.append(row);
}
