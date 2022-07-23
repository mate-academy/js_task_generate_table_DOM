'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableRef = document.querySelector('tbody');

for (const person of people) {
  const template = `<tr>
    <td>${person.name}</td>
    <td>${getsexPeople(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`;

  tableRef.insertAdjacentHTML('beforeend', template);
}

function getsexPeople(str) {
  if (str === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}
