'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

people.forEach(human => {
  const table = document.querySelector('.dashboard');
  const tableBody = table.querySelector('tbody');

  const age = human.died - human.born;
  const century = Math.ceil(human.died / 100);

  let gender = '';

  if (human.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

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
