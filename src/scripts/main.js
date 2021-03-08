'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

for (const person in people) {
  const row = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');

  table.append(row);
  row.append(personName);
  row.append(personGender);
  row.append(personBorn);
  row.append(personDied);
  row.append(personAge);
  row.append(personCentury);

  personName.textContent = people[person].name;
  personGender.textContent = people[person].sex === 'f' ? 'Female' : 'Male';
  personBorn.textContent = people[person].born;
  personDied.textContent = people[person].died;
  personAge.textContent = people[person].died - people[person].born;
  personCentury.textContent = Math.ceil(people[person].died / 100);
}
