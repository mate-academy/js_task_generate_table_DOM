'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  dashboard.append(tr);

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Man' : 'Woman'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;
}
