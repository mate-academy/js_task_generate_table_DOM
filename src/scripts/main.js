'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(item => {
  const age = item.died - item.born;

  const century = Math.ceil(item.died / 100);

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${item.name}</td>
  <td>${item.sex}</td>
  <td>${item.born}</td>
  <td>${item.died}</td>
  <td>${age}</td>
  <td>${century}</td>
  `;

  const a = document.querySelector('.dashboard');

  a.lastChild.append(tr);
});
