'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

for (const person of people) {
  const { name: firstName, sex, born, died } = person;
  const itemRow = document.createElement('tr');

  itemRow.innerHTML = `
    <td>${firstName}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  table.append(itemRow);
}
