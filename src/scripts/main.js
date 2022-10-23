'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  const humanAge = person.died - person.born;

  const humanCenturyOfDeath = Math.ceil(person.died / 100);

  switch (person.sex) {
    case 'm':
      person.sex = 'Male';
      break;
    case 'f':
      person.sex = 'Female';
      break;
    default:
      person.sex = 'someone else';
      break;
  };

  tr.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${humanAge}</td>
    <td>${humanCenturyOfDeath}</td>
  `);
  table.append(tr);
});
