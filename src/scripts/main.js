'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const headers = [...document.querySelectorAll('th')];

const setHeaderData = (person, headerName) => {
  switch (headerName) {
    case 'gender':
      return person.sex === 'm' ? 'Male' : 'Female';
    case 'age':
      return person.died - person.born;
    case 'century':
      return Math.ceil(person.died / 100);
    default:
      return person[headerName];
  }
};

people.forEach(person => {
  const tr = document.createElement('tr');

  headers.forEach(cell => {
    const td = document.createElement('td');

    td.innerText = setHeaderData(person, cell.innerText.toLowerCase());
    tr.append(td);
  });

  table.append(tr);
});
