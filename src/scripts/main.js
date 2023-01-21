'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(el => {
  const { name: person, sex, born, died } = el;
  const personGender = sex === 'm' ? 'Female' : 'Male';
  const personAge = died - born;
  const personCentury = Math.ceil(died / 100);

  const row = document.createElement('tr');

  row.innerHTML = `
    <th>${person}</th>
    <th>${personGender}</th>
    <th>${born}</th>
    <th>${died}</th>
    <th>${personAge}</th>
    <th>${personCentury}</th>
  `;

  table.append(row);
});
