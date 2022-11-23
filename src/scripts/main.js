'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const list = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');

  nameCell.textContent = people[i].name;
  row.append(nameCell);

  const genderCell = document.createElement('td');

  if (people[i].sex === 'm') {
    genderCell.textContent = 'Male';
  } else {
    genderCell.textContent = 'Female';
  }
  row.append(genderCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = people[i].born;
  row.append(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = people[i].died;
  row.append(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = people[i].died - people[i].born;
  row.append(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(people[i].died / 100);
  row.append(centuryCell);

  list.append(row);
}
