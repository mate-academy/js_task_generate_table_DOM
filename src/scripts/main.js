'use strict';

const people = require('./lib/people.json');
const table = document.querySelector('.table');

for (const elem of people) {
  table.insertAdjacentHTML('afterend', `
  <tr>
    <td>${elem.name}</td>
    <td>${elem.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${elem.born}</td>
    <td>${elem.died}</td>
    <td>${elem.died - elem.born}</td>
    <td>${Math.ceil(elem.died / 100)}</td>
</tr>`);
};
