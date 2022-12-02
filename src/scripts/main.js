'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

for (const person of people) {
  const { name: fullName, sex, born, died } = person;
  const gender = sex === 'm' ? 'Male' : 'Female';

  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${fullName}</td>
    <td>${gender}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  table.append(tr);
}
