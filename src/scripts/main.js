'use strict';

import people from './lib/people.json' with { type: 'json' };

const isValidNumber = (n) => typeof n === 'number' && !Number.isNaN(n);

const getAge = (person) => {
  const { born, died } = person ?? {};

  return isValidNumber(born) && isValidNumber(died) ? died - born : '-';
};

const getCentury = (person) => {
  const { died } = person ?? {};

  return isValidNumber(died) ? Math.ceil(died / 100) : '-';
};

const normalizeGender = (person) => {
  const code = person?.sex;

  if (code === 'm') {
    return 'Male';
  }

  if (code === 'f') {
    return 'Female';
  }

  return '-';
};

function fillTable(table) {
  const tBody = table.tBodies?.[0] ?? table.createTBody();

  let rowsHtml = '';

  people.forEach((person) => {
    rowsHtml += `
      <tr>
        <td>${typeof person.name === 'string' ? person.name : '-'}</td>
        <td>${normalizeGender(person)}</td>
        <td>${isValidNumber(person.born) ? person.born : '-'}</td>
        <td>${isValidNumber(person.died) ? person.died : '-'}</td>
        <td>${getAge(person)}</td>
        <td>${getCentury(person)}</td>
      </tr>`;
  });

  tBody.insertAdjacentHTML('beforeend', rowsHtml);
}

const dashboard = document.querySelector('.dashboard');

if (dashboard) {
  fillTable(dashboard);
}
