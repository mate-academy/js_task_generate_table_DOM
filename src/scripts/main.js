'use strict';

const people = require('./lib/people');
const accessToTable = document.querySelector('tBody');

accessToTable.insertAdjacentHTML('beforeend',
  people.map(x => `
    <tr>
      <td>${x.name}</td>
      <td>${x.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${x.born}</td>
      <td>${x.died}</td>
      <td>${x.died - x.born}</td>
      <td>${Math.ceil(x.died / 100)}</td>
  </tr>`).join(''));
