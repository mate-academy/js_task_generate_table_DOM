'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <th>${person.name}</th>
  <th>${person.sex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `;

  table.append(tr);
});
