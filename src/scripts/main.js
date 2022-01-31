'use strict';

const people = require('./lib/people');

const body = document.querySelector('tbody');

people.map(pers => {
  let gender;

  pers.sex === 'm' ? gender = 'Male' : gender = 'Female';

  const row = document.createElement('tr');

  row.innerHTML = `
    <th>${pers.name}</th>
    <th>${gender}</th>
    <th>${pers.born}</th>
    <th>${pers.died}</th>
    <th>${pers.died - pers.born}</th>
    <th>${Math.ceil(pers.died / 100)}</th>
  `;

  body.append(row);
});
