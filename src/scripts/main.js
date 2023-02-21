'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.forEach(element => {
  const {
    sex,
    born,
    died,
    age = died - born,
    century = Math.ceil(died / 100),
  } = element;

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${element.name}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
    `);
});
