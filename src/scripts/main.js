'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(element => {
  const tr = document.createElement('tr');

  tr.innerHTML = `<td>${element.name}</td>
  <td>${(element.sex === 'm') ? 'Male' : 'Female'}</td>
  <td>${element.born}</td>
  <td>${element.died}</td>
  <td>${element.died - element.born}</td>
  <td>${Math.ceil(element.died / 100)}</td>`;
  table.append(tr);
});
