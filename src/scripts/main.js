'use strict';

const people = require('./lib/people');

const table = document.querySelector('tr');

for (const person of people) {
  const gender = (person.sex === 'm' ? 'Male' : 'Female');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  table.insertAdjacentHTML('afterend',
    `<tr class="${person.name}">
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
      </tr>`
  );
}
