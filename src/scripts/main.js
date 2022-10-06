'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

function getPersonInfo(person) {
  let personSexStr;

  if (person.sex === 'f') {
    personSexStr = `<th>Female</th>`;
  } else {
    personSexStr = `<th>Male</th>`;
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

people.forEach(person => table
  .insertAdjacentHTML('beforeend', getPersonInfo(person)));
