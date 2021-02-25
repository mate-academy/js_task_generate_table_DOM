'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
console.log(people);

for (const person of people) {
  const { name, sex, born, died } = person;

  dashboard.children[0].insertAdjacentHTML('beforeend', `
    <tr>
      <td>${name}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
}
