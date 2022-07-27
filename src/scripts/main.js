'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const personSex = person.sex === 'm' ? 'Male' : 'Female';

  row.innerHTML = `
  <th>${person.name}</th>
  <th>${personSex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.died - person.born}</th>
  <th>${Math.ceil(person.died / 100)}</th>
  `;

  table.append(row);
})
