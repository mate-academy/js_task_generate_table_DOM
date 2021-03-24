'use strict';

const people = require('./lib/people');
const tableOfPeople = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const person = people[i];
  const personSex = person.sex === 'm' ? 'Male' : 'Female';

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${personSex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  tableOfPeople.append(row);
}
