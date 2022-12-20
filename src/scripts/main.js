'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.map((elem, index) => {
  table.insertAdjacentHTML('beforeend',
    `<tr>
    <td>${elem.name}</td>
    <td>${elem.sex === 'm' ? 'Male' : 'Famale'}</td>
    <td>${elem.born}</td>
    <td>${elem.died}</td>
    <td>${elem.died - elem.born}</td>
    <td>${Math.ceil(elem.died / 100)}</td>
  </tr>`);
});
