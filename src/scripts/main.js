'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const tableRes = document.querySelector('.dashboard');
const peoplleData = people.map(person => ({
  ...person,
  age: person.died - person.born,
  century: Math.ceil(person.died / 100),
  gender: person.sex === 'm' ? 'Male' : 'Female',
}));

const headers = tableRes.children[0].children[0].children;
const headersToLowerCase = [...headers].map(value =>
  value.innerHTML.toLowerCase());

for (const person of peoplleData) {
  const row = document.createElement('tr');

  for (const header of headersToLowerCase) {
    const peopleName = document.createElement('td');

    peopleName.textContent = person[header];
    row.append(peopleName);
    tableRes.append(row);
  }
}
