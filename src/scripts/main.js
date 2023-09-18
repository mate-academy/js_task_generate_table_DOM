'use strict';

const MALE_GENDER = 'm';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, died, born, sex } = person;

  const age = died - person.born;
  const century = Math.ceil(person.died / 100);
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeEnd', `
    <tr>
      <td>${personName}</td>
      <td>${sex === MALE_GENDER ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);

  dashboard.append(row);
});
