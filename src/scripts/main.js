'use strict';

const people = require('./lib/people');

const dashBoard = document.querySelector('.dashboard');

people.forEach(person => {
  const dashBoardRow = document.createElement('tr');
  const sex = person.sex === 'm' ? 'Male' : 'Female';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  dashBoardRow.innerHTML = `
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</t>
  `;

  dashBoard.append(dashBoardRow);
});
