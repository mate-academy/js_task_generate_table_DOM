'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(person => {
  const dashboard = document.getElementsByClassName('dashboard');
  const row = document.createElement('tr');

  const cellName = document.createElement('td');
  const cellSex = document.createElement('td');
  const cellBorn = document.createElement('td');
  const cellDied = document.createElement('td');
  const cellAge = document.createElement('td');
  const cellCentury = document.createElement('td');

  cellName.textContent = person.name;
  row.append(cellName);

  cellSex.textContent = person.sex === 'f' ? 'Female' : 'Male';
  row.append(cellSex);

  cellBorn.textContent = person.born;
  row.append(cellBorn);

  cellDied.textContent = person.died;
  row.append(cellDied);

  cellAge.textContent = person.died - person.born;
  row.append(cellAge);

  cellCentury.textContent = Math.ceil(person.died / 100);
  row.append(cellCentury);

  dashboard[0].append(row);
});
