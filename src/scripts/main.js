'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tr');

for (let i = people.length - 1; i >= 0; i--) {
  if (people[i].sex === 'm') {
    people[i].sex = 'Male';
  } else {
    people[i].sex = 'Female';
  }

  table.insertAdjacentHTML('afterend', `
    <tr>
      <td>${people[i].name}</td>
      <td>${people[i].sex}</td>
      <td>${people[i].born}</td>
      <td>${people[i].died}</td>
      <td>${people[i].died - people[i].born}</td>
      <td>${Math.ceil(people[i].died / 100)}</td>
    </tr>
  `);
}
