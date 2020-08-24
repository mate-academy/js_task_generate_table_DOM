'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const a of people) {
  table.insertAdjacentHTML('beforeend',
    `
      <tr>
        <td>${a.name}</td>
        <td>${a.sex === 'm' ? 'Male' : 'Female'}</td>
        <td>${a.born}</td>
        <td>${a.died}</td>
        <td>${a.died - a.born}</td>
        <td>${Math.ceil(a.born / 100)}</td>
      </tr>
    `
  );
}
