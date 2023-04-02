'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellGender = document.createElement('td');
  const cellBorn = document.createElement('td');
  const cellDied = document.createElement('td');
  const cellAge = document.createElement('td');
  const cellCentury = document.createElement('td');

  cellName.innerText = person.name;
  cellGender.innerText = gender;
  cellBorn.innerText = person.born;
  cellDied.innerText = person.died;
  cellAge.innerText = age;
  cellCentury.innerText = century;

  row.appendChild(cellName);
  row.appendChild(cellGender);
  row.appendChild(cellBorn);
  row.appendChild(cellDied);
  row.appendChild(cellAge);
  row.appendChild(cellCentury);

  table.append(row);
}
