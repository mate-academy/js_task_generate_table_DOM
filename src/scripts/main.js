'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellGender = document.createElement('td');
  const cellBorn = document.createElement('td');
  const cellDied = document.createElement('td');
  const cellAge = document.createElement('td');
  const cellCentury = document.createElement('td');

  cellName.innerText = person.name;

  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  cellGender.innerText = person.sex;
  cellBorn.innerText = person.born;
  cellDied.innerText = person.died;
  cellAge.innerText = person.age;
  cellCentury.innerText = person.century;

  row.appendChild(cellName);
  row.appendChild(cellGender);
  row.appendChild(cellBorn);
  row.appendChild(cellDied);
  row.appendChild(cellAge);
  row.appendChild(cellCentury);

  table.append(row);
});
