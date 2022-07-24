'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(element => {
  dashboard.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${element.name}</th>
      <th>${element.sex}</th>
      <th>${element.born}</th>
      <th>${element.died}</th>
      <th>${element.died - element.born}</th>
      <th>${Math.ceil((element.died) / 100)}</th>
    </tr>
  `);
});
