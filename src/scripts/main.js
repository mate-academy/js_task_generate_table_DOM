'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const personData = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');
  const age = person.died - person.born;

  personName.textContent = person.name;
  personGender.textContent = gender(person.sex);
  personBorn.textContent = person.born;
  personDied.textContent = person.died;
  personAge.textContent = age;
  personCentury.textContent = Math.ceil(person.died / 100);

  personData.append(personName,
    personGender,
    personBorn,
    personDied,
    personAge,
    personCentury);

  table.append(personData);
}

function gender(sex) {
  if (sex === 'f') {
    return 'Female';
  } else {
    return 'Male';
  }
};
