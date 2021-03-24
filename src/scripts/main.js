'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const age = people[i].died - people[i].born;
  const century = Math.ceil(people[i].died / 100);
  const sex = people[i].sex === 'f' ? 'Female' : 'Male';
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
    <td>${people[i].name}</td>
    <td>${sex}</td>
    <td>${people[i].born}</td>
    <td>${people[i].died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  table.append(row);
}
