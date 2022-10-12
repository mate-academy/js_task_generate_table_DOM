'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

// write your code here
const table = people.map(person => {
  let sex;
  const age = person.died - person.born;
  const centery = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    sex = 'Male';
  } else {
    sex = 'Female';
  }

  return (`<tr>
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${centery}</td>
  </tr>`);
});

const dashboard = document.querySelector('.dashboard tbody');

dashboard.insertAdjacentHTML('beforeend', table);
