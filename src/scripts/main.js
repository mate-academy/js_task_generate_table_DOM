'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tbody');

// eslint-disable-next-line no-shadow
people.forEach(({ name, sex, born, died }) => {
  const row = document.createElement('tr');
  const ceils = Array(6).fill(null).map(e => document.createElement('td'));

  const [nameCeil, genderCeil, bornCeil, diedCeil,
    ageCeil, centuryCeil] = ceils;

  nameCeil.innerHTML = name;
  genderCeil.innerHTML = sex === 'm' ? 'Male' : 'Female';
  bornCeil.innerHTML = born;
  diedCeil.innerHTML = died;
  ageCeil.innerHTML = died - born;
  centuryCeil.innerHTML = Math.ceil(died / 100);

  row.append(...ceils);
  tableBody.append(row);
});
