'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.map(a => createRow(a, table));

function createRow(person, nodeHook) {
  const row = document.createElement('tr');

  const cellName = document.createElement('th');

  cellName.textContent = person.name;

  const cellSex = document.createElement('th');

  cellSex.textContent = person.sex === 'm' ? 'Male' : 'Female';

  const cellBorn = document.createElement('th');

  cellBorn.textContent = person.born;

  const cellDied = document.createElement('th');

  cellDied.textContent = person.died;

  const cellAge = document.createElement('th');

  cellAge.textContent = person.died - person.born;

  const cellCentury = document.createElement('th');

  cellCentury.textContent = Math.ceil(person.died / 100);

  row.append(cellName, cellSex, cellBorn,
    cellDied, cellAge, cellCentury);

  nodeHook.append(row);
}
