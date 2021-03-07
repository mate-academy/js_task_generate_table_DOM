'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person in people) {
  const row = document.createElement('tr');

  table.append(row);

  const personName = document.createElement('td');

  row.append(personName);
  personName.textContent = people[person].name;

  const gender = document.createElement('td');

  row.append(gender);

  gender.textContent = (people[person].sex === 'm')
    ? 'Male'
    : 'Female';

  const born = document.createElement('td');

  row.append(born);

  born.textContent = people[person].born;

  const died = document.createElement('td');

  row.append(died);

  died.textContent = people[person].died;

  const age = document.createElement('td');

  row.append(age);

  age.textContent = people[person].died - people[person].born;

  const century = document.createElement('td');

  row.append(century);

  century.textContent = Math.ceil(people[person].died / 100);
}
