'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const rootElement = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const cellName = document.createElement('td');
  const cellGender = document.createElement('td');
  const cellBorn = document.createElement('td');
  const cellDied = document.createElement('td');
  const cellAge = document.createElement('td');
  const cellCentery = document.createElement('td');

  cellName.textContent = person.name;
  cellGender.textContent = person.sex === 'm' ? 'Male' : 'Female';
  cellBorn.textContent = person.born;
  cellDied.textContent = person.died;
  cellAge.textContent = person.died - person.born;
  cellCentery.textContent = Math.ceil(person.died / 100);

  row.append(cellName);
  row.append(cellGender);
  row.append(cellBorn);
  row.append(cellDied);
  row.append(cellAge);
  row.append(cellCentery);

  rootElement.append(row);
});
// write your code here
