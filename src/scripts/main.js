'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(element => {
  const rowPeople = document.createElement('tr');

  rowPeople.innerHTML = `
    <td>${element.name}</td>
    <td>${element.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${element.born}</td>
    <td>${element.died}</td>
    <td>${element.died - element.born}</td>
    <td>${Math.ceil(element.died / 100)}</td>
  `;

  table.append(rowPeople);
});
