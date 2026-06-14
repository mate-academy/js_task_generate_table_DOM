'use strict';

import people from './lib/people.json';

const tableOfPeople = document.querySelector('.dashboard');

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const row = document.createElement('tr');

  row.innerHTML = `
  <td>${person.name}</td>
  <td>${gender}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${age}</td>
  <td>${century}</td>`;

  tableOfPeople.append(row);
});
