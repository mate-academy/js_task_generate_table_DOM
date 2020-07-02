'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const mainTable = document.querySelector('tbody');

for (const person of people) {
  const { name, sex, born, died } = person;
  const newRow = document.createElement('tr');
  const personName = document.createElement('th');
  const personGender = document.createElement('th');
  const personBorn = document.createElement('th');
  const personDied = document.createElement('th');
  const personAge = document.createElement('th');
  const personSentury = document.createElement('th');

  personName.innerText = name;
  personGender.innerText = sex === 'm' ? 'Male' : 'Female';
  personBorn.innerText = born;
  personDied.innerText = died;
  personAge.innerText = died - born;
  personSentury.innerText = Math.ceil(died / 100);

  newRow.append(
    personName, personGender, personBorn, personDied, personAge, personSentury
  );
  mainTable.append(newRow);
}
