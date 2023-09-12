'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = (sex === 'm') ? 'Male' : 'Female';

  const personRow = document.createElement('tr');

  personRow.innerHTML = `
    <th>${personName}</th>
    <th>${gender}</th>
    <th>${born}</th>
    <th>${died}</th>
    <th>${age}</th>
    <th>${century}</th>
  `;

  dashboard.append(personRow);
});
