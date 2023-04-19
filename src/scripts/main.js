'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const newRow = document.createElement('tr');
  let gender = '';

  if (people[i].sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  newRow.innerHTML = `
    <th>${people[i].name}</th>
    <th>${gender}</th>
    <th>${people[i].born}</th>
    <th>${people[i].died}</th>
    <th>${people[i].died - people[i].born}</th>
    <th>${Math.ceil(people[i].died / 100)}</th>
  `;
  table.append(newRow);
}
