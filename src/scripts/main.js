'use strict';

const people = require('./lib/people');

const dashBoard = document.querySelector('.dashboard');

people.forEach(person => {
  const dashBoardRow = document.createElement('tr');

  dashBoardRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</t>
  `;

  dashBoard.append(dashBoardRow);
});
