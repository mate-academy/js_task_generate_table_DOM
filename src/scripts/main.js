'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

people.forEach(person => {
  const table = document.querySelector('.dashboard');

  const newRow = document.createElement('tr');

  const nameInput = document.createElement('td');

  nameInput.textContent = person.name;
  newRow.appendChild(nameInput);

  const sexInput = document.createElement('td');

  sexInput.textContent = person.sex === 'm' ? 'Male' : 'Female';
  newRow.appendChild(sexInput);

  const bornInput = document.createElement('td');

  bornInput.textContent = person.born;
  newRow.appendChild(bornInput);

  const diedInput = document.createElement('td');

  diedInput.textContent = person.died;
  newRow.appendChild(diedInput);

  const ageInput = document.createElement('td');

  ageInput.textContent = person.died - person.born;
  newRow.appendChild(ageInput);

  const centuryInput = document.createElement('td');

  centuryInput.textContent = Math.ceil(person.died / 100);
  newRow.appendChild(centuryInput);

  table.appendChild(newRow);
});
