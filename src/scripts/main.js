'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('tbody');

people.forEach(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const { name: personName, sex, born, died, age, century } = person;

  dashboard.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${personName}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);
});
