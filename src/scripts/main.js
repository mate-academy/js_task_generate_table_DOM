'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

people.forEach(el => {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${el.name}</td>
      <td>${el.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${el.born}</td>
      <td>${el.died}</td>
      <td>${el.died - el.born}</td>
      <td>${Math.ceil(el.died / 100)}</td>
    </tr> `
  );
});
