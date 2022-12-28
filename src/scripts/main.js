'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(human => {
  const tr = document.createElement('tr');

  tr.innerHTML = ` 
  <td>${human.name}</td>
  <td>${human.sex}</td>
  <td>${human.born}</td>
  <td>${human.died}</td>
  <td>${human.died - human.born}</td>
  <td>${Math.ceil(human.died / 100)}</td>
  `;
  table.append(tr);
});
