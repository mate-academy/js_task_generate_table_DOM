'use strict';

const people = require('./lib/people');
const accessToTable = document.querySelector('.dashboard');

accessToTable.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Gender</th>
    <th>Born</th>
    <th>Died</th>
    <th>Age</th>
    <th>Century</th>
  </tr>`

    + people.map(x => `
    <tr>
      <th>${x.name}</th>
      <th>${x.sex}</th>
      <th>${x.born}</th>
      <th>${x.died}</th>
      <th>${x.died - x.born}</th>
      <th>${Math.ceil(x.died / 100)}</th>
  </tr>`).join('');
