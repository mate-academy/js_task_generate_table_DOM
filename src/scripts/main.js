'use strict';

import people from '../scripts/lib/people.json';

// eslint-disable-next-line no-console

function getCentury(year) {
  if (year < 1) {
    return 1;
  }

  const x = year / 100;

  return Math.ceil(x);
}

function genPersonData(peop) {
  const nam = peop.name;
  const age = peop.died - peop.born;
  const centur = getCentury(peop.died);
  let poplSex = '';

  if (peop.sex === 'm') {
    poplSex = 'Male';
  } else {
    poplSex = 'Female';
  }

  const person = [nam, poplSex, peop.born, peop.died, age, centur];

  return person;
}

const table = document.querySelector('.dashboard');

for (let r = 0; r < people.length; r++) {
  const raw = document.createElement('tr');

  const currentPerson = genPersonData(people[r]);

  for (const value of currentPerson) {
    const cell = document.createElement('td');

    cell.textContent = value;
    raw.append(cell);
  }
  table.append(raw);
}
