'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('table');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(item => {
  const newRow = document.createElement('tr');

  newRow.insertAdjacentHTML('beforeend', `
      <td>${item.name}</td>
      <td>${item.sex}</td>
      <td>${item.born}</td>
      <td>${item.died}</td>
      <td>${item.died - item.born}</td>
      <td>${Math.ceil(item.died / 100)}</td>
  `);
  dashboard.append(newRow);
});
