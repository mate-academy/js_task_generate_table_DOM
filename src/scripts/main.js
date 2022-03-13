/* eslint-disable no-unused-vars */
'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

const result = [...people];

const finalaze = result.map((el) => {
  const tableRows = document.createElement('tr');

  const age = el.died - el.born;
  const century = Math.ceil(el.died / 100);

  tableRows.insertAdjacentHTML(
    'afterbegin',
    `
    <th>${el.name}</th>
    <th>${el.sex === 'f' ? 'Female' : 'Male'}</th>
    <th>${el.born}</th>
    <th>${el.died}</th>
    <th>${age}</th>
    <th>${century}</th>
    `
  );

  table.append(tableRows);
});
