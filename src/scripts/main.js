'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const element = document.querySelector('.dashboard');

people.map(item => {
  const row = document.createElement('tr');

  element.append(row);

  row.innerHTML = `
 <tr>
  <th>${item.name}</th>
  <th>${item.sex}</th>
  <th>${item.born}</th>
  <th>${item.died}</th>
  <th>${item.died - item.born}</th>
  <th>${Math.ceil(item.died / 100)}</th>
  </tr>
`;
});
