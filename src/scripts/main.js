'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const result = document.querySelector('.dashboard');
const arr = JSON.parse(JSON.stringify(people));

arr.map(person => {
  const item = document.createElement('tr');
  const cell = document.createElement('td');

  cell.textContent = person.name;

  const cell1 = document.createElement('td');

  cell1.textContent = person.sex;

  const cell2 = document.createElement('td');

  cell2.textContent = person.born;

  const cell3 = document.createElement('td');

  cell3.textContent = person.died;

  const cell4 = document.createElement('td');

  cell4.textContent = person.died - person.born;

  const cell5 = document.createElement('td');

  cell5.textContent = Math.ceil(person.died / 100);

  item.append(cell, cell1, cell2, cell3, cell4, cell5);

  return result.append(item);
});
