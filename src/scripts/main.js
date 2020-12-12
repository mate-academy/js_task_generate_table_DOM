'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

table.children[0].insertAdjacentHTML('beforeend',
  `${people
    .map((human) => {
      return `
        <tr>
          <td>${human.name}</td>
          <td>${human.sex === 'f' ? 'Female' : 'Male'}</td>
          <td>${human.born}</td>
          <td>${human.died}</td>
          <td>${human.died - human.born}</td>
          <td>${Math.ceil(human.died / 100)}</td>
        </tr>`;
    })
    .join('')}`
);
