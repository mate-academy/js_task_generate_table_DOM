'use strict';

const people = require('./lib/people');

// write your code here

const table = document.querySelector('.dashboard');

people.forEach(person => {
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;

  const newRow = document.createElement('tr');

  const nameInput = document.createElement('td');

  nameInput.textContent = name;
  newRow.appendChild(nameInput);

  const sexInput = document.createElement('td');

  sexInput.textContent = sex === 'm' ? 'Male' : 'Female';
  newRow.appendChild(sexInput);

  const bornInput = document.createElement('td');

  bornInput.textContent = born;
  newRow.appendChild(bornInput);

  const diedInput = document.createElement('td');

  diedInput.textContent = died;
  newRow.appendChild(diedInput);

  const ageInput = document.createElement('td');

  ageInput.textContent = person.died - person.born;
  newRow.appendChild(ageInput);

  const centuryInput = document.createElement('td');

  centuryInput.textContent = Math.ceil(person.died / 100);
  newRow.appendChild(centuryInput);

  table.appendChild(newRow);
});
