'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const personName = people[i].name;
  const personGender = people[i].sex;
  const personBorn = people[i].born;
  const personDied = people[i].died;
  const personAge = (people[i].died - people[i].born);
  const personCentury = Math.ceil(people[i].died / 100);
  const nameCell = document.createElement('td');
  const genderCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.innerText = personName;
  genderCell.innerText = personGender === 'm' ? 'Male' : 'Female';
  bornCell.innerText = personBorn;
  diedCell.innerText = personDied;
  ageCell.innerText = personAge;
  centuryCell.innerText = personCentury;
  row.append(nameCell, genderCell, bornCell, diedCell, ageCell, centuryCell);

  table.appendChild(row);
}
