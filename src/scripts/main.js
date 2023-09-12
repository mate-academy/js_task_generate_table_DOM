'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const tr = document.createElement('tr');

for (const elem of people) {
  tr.innerHTML = `
      <th>${elem.name}</th>
      <th>${elem.sex === 'm' ? 'Male' : 'Female'}</th>
      <th>${elem.born}</th>
      <th>${elem.died}</th>
      <th>${elem.died - elem.born}</th>
      <th>${Math.ceil(elem.died / 100)}</th>
    `;

  table.append(tr.cloneNode(true));
}
