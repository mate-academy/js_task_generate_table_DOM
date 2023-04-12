'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(item => {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
  <td>${item.name}</td>
  <td>${item.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${item.born}</td>
  <td>${item.died}</td>
  <td>${item.died - item.born}</td>
  <td>${Math.ceil(item.died / 100)}</td>
  `);

  table.append(row);
});
