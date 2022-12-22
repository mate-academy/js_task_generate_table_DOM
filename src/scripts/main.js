'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(el => {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${el.name}</th>
      <th>${el.sex}</th>
      <th>${el.born}</th>
      <th>${el.died}</th>
      <th>${el.died - el.born}</th>
      <th>${Math.ceil(el.died / 100)}</th>
    </tr>`
  );
});
