'use strict';
import people from './lib/people.json';

const table = document.querySelector('.dashboard tbody');

people.forEach((el) => {
  table.insertAdjacentHTML(
    'beforeend',
    `      <tr>
        <th>${el.name}</th>
        <th>${el.sex}</th>
        <th>${el.born}</th>
        <th>${el.died}</th>
        <th>${el.died - el.born}</th>
        <th>${Math.ceil(el.born / 100)}</th>
      </tr>`,
  );
});
