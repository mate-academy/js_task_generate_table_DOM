'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(el => {
  table.firstElementChild.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${el.name}</td>
      <td>${el.sex}</td>
      <td>${el.born}</td>
      <td>${el.died}</td>
      <td>${el.died - el.born}</td>
      <td>${Math.ceil(el.died / 100)}</td>
    </tr>`
  );
});
