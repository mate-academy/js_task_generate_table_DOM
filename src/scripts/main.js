'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard>tbody');

for (const row of people) {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${row.name}</td>
      <td>${row.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${row.born}</td>
      <td>${row.died}</td>
      <td>${row.died - row.born}</td>
      <td>${Math.ceil(row.died / 100) <= 20
    ? Math.ceil(row.died / 100) + 'th'
    : Math.ceil(row.died / 100) + 'st'}
      </td>
    </tr>`
  );
}
