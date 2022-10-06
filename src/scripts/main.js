'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

function personInfo(person) {
  let personSexStr;

  if (person.sex === 'f') {
    personSexStr = `<th>${person.sex.toUpperCase()}emale</th>`;
  } else {
    personSexStr = `<th>${person.sex.toUpperCase()}ale</th>`;
  };

  return ` 
  <tr>
    <th>${person.name}</th>
  ` + personSexStr + `
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  </tr>
  `;
}

people.map(person => table.insertAdjacentHTML('beforeend', personInfo(person)));
