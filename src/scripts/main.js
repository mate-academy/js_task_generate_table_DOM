'use strict';

const people = require('./lib/people');

const newTable = document.querySelector(`.dashboard`);
const newTableBody = newTable.firstElementChild;

people.forEach(element => {
  newTableBody.insertAdjacentHTML('beforeend', `
  <td>${element.name}</td>
  <td>${element.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${element.born}</td>
  <td>${element.died}</td>
  <td>${element.died - element.born}</td>
  <td>${Math.ceil(element.died / 100)}</td>
  `);
});
