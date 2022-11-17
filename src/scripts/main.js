'use strict';

const people = require('./lib/people');

const tab = document.querySelector('.dashboard');

for (const person of people) {
  const x = document.createElement('tr');
  const gender = person.sex === 'f' ? 'Female' : 'Male';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  x.insertAdjacentHTML('afterbegin', `
  <th>${person.name}</th>
  <th>${gender}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `);

  tab.append(x);
}
