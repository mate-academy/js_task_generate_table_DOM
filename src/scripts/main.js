'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');
const tableBody = table.querySelector('tbody');

people.forEach(human => {
  const age = human.died - human.born;
  const century = Math.ceil(human.died / 100);

  let gender = '';

  (human.sex === 'm') ? gender = 'Male' : gender = 'Female';

  tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${human.name}</td>
      <td>${gender}</td>
      <td>${human.born}</td>
      <td>${human.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);
});
