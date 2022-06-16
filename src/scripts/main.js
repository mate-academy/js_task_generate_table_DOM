'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard').children[0].children[0];

for (let i = 0; i < people.length; i++) {
  table.insertAdjacentHTML(`afterend`, `
    <tr>
      <td>${people[i].name}</td>
      <td>${people[i].sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${people[i].born}</td>
      <td>${people[i].died}</td>
      <td>${people[i].died - people[i].born}</td>
      <td>${Math.ceil(people[i].died / 100)}</td>
    </tr>
  `);
}
