'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person in people) {
  const row = document.createElement('tr');
  const personGender = people[person].sex === 'm' ? 'Male' : 'Female';
  const personAge = people[person].died - people[person].born;
  const century = Math.ceil(people[person].died / 100);

  row.innerHTML = `
    <td>${people[person].name}</td>
    <td>${personGender}</td>
    <td>${people[person].born}</td>
    <td>${people[person].died}</td>
    <td>${personAge}</td>
    <td>${century}</td>
  `;

  table.append(row);
}
