'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

// write your code here
people.forEach(person => {
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  tr.appendChild(nameCell);

  const sexCell = document.createElement('td');

  sexCell.textContent = person.sex === 'm' ? 'Male' : 'Female';
  tr.appendChild(sexCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  tr.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  tr.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = person.died - person.born;
  tr.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(person.died / 100);
  tr.appendChild(centuryCell);

  table.appendChild(tr);
});
