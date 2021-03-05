'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code
const table = document.body.querySelector('.dashboard');
const tableBody = table.querySelector('tbody');

people.forEach(human => {
  const personAge = human.died - human.born;
  const century = Math.ceil(human.died / 100);
  const sex = (human.sex === 'f') ? 'Female' : 'Male';

  tableBody.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${human.name}</td>
    <td>${sex}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${personAge}</td>
    <td>${century}</td>
  </tr>`);
});
