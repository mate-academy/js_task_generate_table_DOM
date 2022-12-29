'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const element = document.querySelector('.dashboard');

people.map(item => {
  const row = document.createElement('tr');

  element.append(row);

  row.innerHTML = `
 <tr>
  <td>${item.name}</td>
  <td>${item.sex}</td>
  <td>${item.born}</td>
  <td>${item.died}</td>
  <td>${item.died - item.born}</td>
  <td>${Math.ceil(item.died / 100)}</td>
  </tr>
`;
});
