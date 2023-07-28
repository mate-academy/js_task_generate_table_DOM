'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

people.forEach(item => {
  const age = item.died - item.born;

  const century = Math.ceil(item.died / 100);

  const sex = item.sex === 'm' ? 'Male'
    : item.sex === 'f' ? 'Female' : 'Unknown';

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${item.name}</td>
  <td>${sex}</td>
  <td>${item.born}</td>
  <td>${item.died}</td>
  <td>${age}</td>
  <td>${century}</td>
  `;

  const dashboard = document.querySelector('.dashboard');

  dashboard.lastChild.append(tr);
});
