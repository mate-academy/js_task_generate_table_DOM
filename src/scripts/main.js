'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <th>${person.name}</th>
      <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    `;
  dashboard.append(tr);
});
