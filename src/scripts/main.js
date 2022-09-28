'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const tabl = document.querySelector('.dashboard');

people.forEach(elem => {
  const row = document.createElement('tr');
  const cod = `
  <th>${elem.name}</th>
  <th>${elem.sex === 'm' ? 'male' : 'female'}</th>
  <th>${elem.born}</th>
  <th>${elem.died}</th>
  <th>${elem.died - elem.born}</th>
  <th>${Math.ceil(elem.died / 100)}</th>
  `;

  row.innerHTML = cod;

  tabl.append(row);
});
