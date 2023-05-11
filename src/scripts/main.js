'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const nameOfPerson = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  nameOfPerson.textContent = person.name;
  gender.textContent = person.sex;
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  row.append(nameOfPerson);
  row.append(gender);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);

  table.append(row);
}
