'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('.dashboard');

// write your code here
function fillInTable(content) {
  for (const person of content) {
    const gender = people.sex === 'm' ? 'Male' : 'Female';
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);
    const html = `<tr>
        <td>${person.name}</td>
        <td>${gender}</td>
        <td>${person.died}</td>
        <td>${person.born}</td>
        <td>${age}</td>
        <td>${century}</td>
        </tr>`;

    table.innerHTML = html;
  }
}

fillInTable(people);
