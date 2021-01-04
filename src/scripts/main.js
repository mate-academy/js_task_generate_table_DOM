'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const layoutTable = document.querySelector('.dashboard');
let gender;

for (const person of people) {
  person.sex === 'm' ? gender = 'Male' : gender = 'Female';

  const newRow = document.createElement('tr');
  const personName = document.createElement('td');

  personName.innerText = person.name;

  const personGender = document.createElement('td');

  personGender.innerText = gender;

  const personBorn = document.createElement('td');

  personBorn.innerText = person.born;

  const personDied = document.createElement('td');

  personDied.innerText = person.died;

  const personAge = document.createElement('td');

  personAge.innerText = person.died - person.born;

  const personCentury = document.createElement('td');

  personCentury.innerText = Math.ceil(person.died / 100);

  newRow.append(personName, personGender,
    personBorn, personDied, personAge, personCentury);

  layoutTable.append(newRow);
};
