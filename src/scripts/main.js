'use strict';

const people = require('./lib/people');

for (const person of people) {
  const tr = document.createElement('tr');
  const dashboard = document.querySelector('.dashboard');

  let sex = '';

  if (person.sex === 'm') {
    sex = 'Male';
  } else {
    sex = 'Female';
  }

  tr.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `);

  dashboard.append(tr);
}
