'use strict';

const people = require('./lib/people');
const mainTab = document.querySelector('.dashboard');

for (const person of people) {
  const newRow = document.createElement('tr');

  mainTab.children[0].append(newRow);

  const nameRow = document.createElement('td');

  nameRow.innerText = person.name;
  newRow.append(nameRow);

  const genderRow = document.createElement('td');

  if (person.sex === 'm') {
    genderRow.innerText = 'Male';
  } else {
    genderRow.innerText = 'Female';
  }
  newRow.append(genderRow);

  const bornRow = document.createElement('td');

  bornRow.innerText = person.born;
  newRow.append(bornRow);

  const diedRow = document.createElement('td');

  diedRow.innerText = person.died;
  newRow.append(diedRow);

  const ageRow = document.createElement('td');

  ageRow.innerText = person.died - person.born;
  newRow.append(ageRow);

  const centuryRow = document.createElement('td');

  centuryRow.innerText = Math.ceil(person.died / 100);
  newRow.append(centuryRow);
}
