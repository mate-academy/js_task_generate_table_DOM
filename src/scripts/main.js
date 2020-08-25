'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableRow = document.querySelector('tr');

for (let i = 0; i < people.length; i++) {
  const gender = (people[i].sex === 'm')
    ? 'Male'
    : 'Female';
  const age = (people[i].died - people[i].born);
  const century = Math.ceil(people[i].died / 100);

  tableRow.insertAdjacentHTML('afterend',
    `<tr>
      <td>${people[i].name}</td>
      <td>${gender}</td>
      <td>${people[i].born}</td>
      <td>${people[i].died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`
  );
}
