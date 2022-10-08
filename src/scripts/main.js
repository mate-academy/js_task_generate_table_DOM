'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('tbody');

for (const person of people) {
  const someOne = document.createElement('tr');

  const someOneName = document.createElement('td');

  someOneName.textContent = person.name;
  someOne.append(someOneName);

  const someOneGender = document.createElement('td');

  someOneGender.textContent = (person.sex === 'm') ? 'Male' : 'Female';
  someOne.append(someOneGender);

  const someOneBorn = document.createElement('td');

  someOneBorn.textContent = person.born;
  someOne.append(someOneBorn);

  const someOneDied = document.createElement('td');

  someOneDied.textContent = person.died;
  someOne.append(someOneDied);

  const someOneAge = document.createElement('td');

  someOneAge.textContent = (person.died - person.born);
  someOne.append(someOneAge);

  const someOneCentury = document.createElement('td');

  someOneCentury.textContent = (Math.ceil(person.died / 100));
  someOne.append(someOneCentury);

  table.append(someOne);
};
