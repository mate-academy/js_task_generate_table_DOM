'use strict';

const people = require('./lib/people');

const table = document.querySelector('tr');

people.forEach(el => {
  table.insertAdjacentHTML('afterend', `
  <td>${el.name}</td>
  <td>${el.sex === 'm' ? 'male' : 'female'}</td>
  <td>${el.born}</td>
  <td>${el.died}</td>
  <td>${el.died - el.born}</td>
  <td>${Math.ceil(el.died / 100)}</td>
  `);
});
