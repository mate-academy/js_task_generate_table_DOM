'use strict';

const people = require('./lib/people');

const tab = document.querySelector('.dashboard');

for (const person of people) {
  const { born, died, sex } = person;

  const createTr = document.createElement('tr');
  const gender = sex === 'f' ? 'Female' : 'Male';
  const age = died - born;
  const century = Math.ceil(person.died / 100);

  createTr.insertAdjacentHTML('afterbegin', `
  <th>${person.name}</th>
  <th>${gender}</th>
  <th>${born}</th>
  <th>${died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `);

  tab.append(createTr);
}
