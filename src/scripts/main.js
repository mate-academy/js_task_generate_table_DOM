'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const dashboard = document.querySelector('.dashboard');

people
  .sort((a, b) => (a.name).localeCompare(b.name))
  .map((person) => {
    const tableRow = document.createElement('tr');
    const cellName = document.createElement('td');

    cellName.textContent = person.name;

    const cellGender = document.createElement('td');

    cellGender.textContent = person.sex === 'm' ? 'Male' : 'Female';

    const cellBorn = document.createElement('td');

    cellBorn.textContent = person.born;

    const cellDied = document.createElement('td');

    cellDied.textContent = person.died;

    const cellAge = document.createElement('td');

    cellAge.textContent = person.died - person.born;

    const cellCentury = document.createElement('td');

    cellCentury.textContent = Math.ceil(person.died / 100);

    tableRow.append(
      cellName,
      cellGender,
      cellBorn,
      cellDied,
      cellAge,
      cellCentury
    );

    return dashboard.append(tableRow);
  });
