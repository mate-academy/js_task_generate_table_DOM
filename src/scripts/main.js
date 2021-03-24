'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableBody = document.getElementsByClassName('dashboard')[0];

for (const person of people) {
  const row = tableBody.insertRow();
  const nameCell = row.insertCell();
  const genderCell = row.insertCell();
  const bornCell = row.insertCell();
  const diedCell = row.insertCell();
  const ageCell = row.insertCell();
  const centuryCell = row.insertCell();

  nameCell.innerText = person.name;

  if (person.sex === 'm') {
    genderCell.innerText = 'Male';
  } else {
    genderCell.innerText = 'Female';
  }
  bornCell.innerText = person.born;
  diedCell.innerText = person.died;
  ageCell.innerText = person.died - person.born;
  centuryCell.innerText = Math.ceil(person.died / 100);
}
