/* eslint-disable no-shadow */
'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.sort((a, b) => (b.died - b.born) - (a.died - a.born));

// eslint-disable-next-line no-console

// write your code here

people.forEach(person => {
  const { name, sex, born, died } = person;

  const gender = sex === 'm' ? 'Male' : 'Female';
  const age = died - born;
  const century = Math.ceil(died / 100);
  const row = document.createElement('tr');

  row.insertAdjacentHTML('afterbegin', `
    <td>${name}</td>
    <td>${gender}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  table.append(row);
});
