'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const every of people) {
  const table = document.createElement('tr');

  table.insertAdjacentHTML('beforeend', `
  <td>${every.name}</td>
  <td>${every.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${every.born}</td>
  <td>${every.died}</td>
  <td>${every.died - every.born}</td>
  <td>${Math.ceil(every.died / 100)}</td>
  `);
  dashboard.append(table);
}
