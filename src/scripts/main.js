'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const human of people) {
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML('beforeend', `
    <td>${human.name}</td>
    <td>${human.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${human.died - human.born}</td>
    <td>${Math.ceil(human.died / 100)}</td>
  `);

  dashboard.append(tr);
}
