'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');
const tbody = dashboard.querySelector('tbody');

const arr = people.map(item =>
  `<tr>
    <td>${item.name}</td>
    <td>${item.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${item.born}</td>
    <td>${item.died}</td>
    <td>${item.died - item.born}</td>
    <td>${Math.ceil(item.died / 100)}</td>
  </tr>`
).join('');

tbody.insertAdjacentHTML('beforeend', arr);
