'use strict';

const people = require('./lib/people');

convertingAPeopleObjectToATable(people);

function convertingAPeopleObjectToATable(men) {
  const tbody = document.querySelector('tbody');

  for (const person of men) {
    const { sex, born, died } = person;
    const namePerson = person.name;

    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${namePerson}</td>
        <td>${sex === 'f' ? 'Female' : 'Male'}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>
      </tr>
    `);
  }
}
