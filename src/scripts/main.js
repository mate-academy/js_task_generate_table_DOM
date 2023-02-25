'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const fullName = document.createElement('td');
  const sex = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  fullName.textContent = `${person.name}`;
  sex.textContent = `${person.sex}`;
  born.textContent = `${person.born}`;
  died.textContent = `${person.died}`;
  age.textContent = `${person.died - person.born}`;

  century.textContent = `${Math.ceil(person.died / 100)}`;

  row.append(fullName);
  row.append(sex);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);
  dashboard.append(row);
}
