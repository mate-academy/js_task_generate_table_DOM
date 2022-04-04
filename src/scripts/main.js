'use strict';

const people = require('./lib/people');

const tab = document.querySelector('.dashboard');

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const personTabRow = document.createElement('tr');

  personTabRow.insertAdjacentHTML('afterbegin', `
    <th>${person.name}</th>
    <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.age}</th>
    <th>${person.century}</th>
  `);

  tab.append(personTabRow);
}
