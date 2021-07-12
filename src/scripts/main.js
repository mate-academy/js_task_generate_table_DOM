'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');

  personName.textContent = person.name;
  personGender.textContent = person.sex === 'm' ? 'male' : 'female';
  personBorn.textContent = `${person.born}`;
  personDied.textContent = `${person.died}`;
  personAge.textContent = `${person.died - person.born}`;
  personCentury.textContent = `${Math.ceil(person.died / 100)}`;

  row.append(personName);
  row.append(personGender);
  row.append(personBorn);
  row.append(personDied);
  row.append(personAge);
  row.append(personCentury);

  table.append(row);
});
