'use strict';

const people = require('./lib/people');

// write your code here

const tableRow = document.querySelector('tr');

people.forEach(person => {
  const personSex = (person.sex === 'm') ? 'Male' : 'Female';
  const personAge = person.died - person.born;
  const birthCentury = Math.ceil(person.died / 100);

  tableRow.insertAdjacentHTML('afterend', `
    <td>${person.name}</td>
    <td>${personSex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${personAge}</td>
    <td>${birthCentury}</td>
  `);
});
