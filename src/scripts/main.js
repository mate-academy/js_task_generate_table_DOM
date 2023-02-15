'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');
const arrPeople = JSON.parse(JSON.stringify(people));

arrPeople.map(person => {
  const rowPerson = document.createElement('tr');
  const cellName = document.createElement('td');

  cellName.textContent = person.name;

  const cellSex = document.createElement('td');

  cellSex.textContent = person.sex === 'm' ? 'Male' : 'Female';

  const cellBorn = document.createElement('td');

  cellBorn.textContent = person.born;

  const cellDied = document.createElement('td');

  cellDied.textContent = person.died;

  const cellAge = document.createElement('td');

  cellAge.textContent = person.died - person.born;

  const cellCentury = document.createElement('td');

  cellCentury.textContent = Math.ceil(person.died / 100);

  rowPerson.append(cellName, cellSex, cellBorn, cellDied, cellAge, cellCentury);

  return dashboard.append(rowPerson);
});
