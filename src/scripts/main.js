'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const tableRow = document.createElement('tr');

  const personName = document.createElement('td');

  personName.textContent = person.name;

  const personGender = document.createElement('td');

  if (person.sex === 'm') {
    personGender.textContent = 'Male';
  } else {
    personGender.textContent = 'Female';
  }

  const personBorn = document.createElement('td');

  personBorn.textContent = person.born;

  const personDied = document.createElement('td');

  personDied.textContent = person.died;

  const personAge = document.createElement('td');

  personAge.textContent = person.died - person.born;

  const personCentury = document.createElement('td');

  personCentury.textContent = Math.ceil(person.died / 100);

  tableRow.append(
    personName,
    personGender,
    personBorn,
    personDied,
    personAge,
    personCentury,
  );

  table.append(tableRow);
});
