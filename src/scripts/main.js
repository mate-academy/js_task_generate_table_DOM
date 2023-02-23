'use strict';

const people = require('./lib/people');

// write your code here
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const tableRow = document.createElement('tr');
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${gender}</td> 
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  dashboard.append(tableRow);
});
