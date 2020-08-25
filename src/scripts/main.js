'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const key in people) {
  table
    .firstElementChild
    .insertAdjacentHTML(
      'beforeend',
      `
    <tr>
      <td>${people[key].name}</td>
      <td>${people[key].sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${people[key].born}</td>
      <td>${people[key].died}</td>
      <td>${people[key].died - people[key].born}</td>
      <td>${Math.ceil(people[key].died / 100)}</td>
    </tr>
    `);
}
