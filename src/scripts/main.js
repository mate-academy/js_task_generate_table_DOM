'use strict';

const people = require('./lib/people.json');
const table = document.querySelector('.dashboard');

people.forEach(obj => {
  const row = document.createElement('tr');

  const firstColumn = document.createElement('td');
  const secondColumn = document.createElement('td');
  const thirdColumn = document.createElement('td');
  const fourthColumn = document.createElement('td');
  const fifthColumn = document.createElement('td');
  const sixthColumn = document.createElement('td');

  firstColumn.innerHTML = `${Object.values(obj)[0]}`;

  if (Object.values(obj)[1] === 'm') {
    secondColumn.innerHTML = 'male';
  } else {
    secondColumn.innerHTML = 'female';
  }
  thirdColumn.innerHTML = `${Object.values(obj)[2]}`;
  fourthColumn.innerHTML = `${Object.values(obj)[3]}`;
  fifthColumn.innerHTML = `${Object.values(obj)[3] - Object.values(obj)[2]}`;

  sixthColumn.innerHTML = `${Math.ceil(
    Object.values(obj)[3] / 100)}`;

  row.append(firstColumn, secondColumn,
    thirdColumn, fourthColumn,
    fifthColumn, sixthColumn);

  table.append(row);
});
