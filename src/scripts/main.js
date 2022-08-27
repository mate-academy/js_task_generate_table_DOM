'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(item => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${item.born}</td>
    <td>${item.died}</td>
    <td>${item.died - item.born}</td>
    <td>${Math.ceil(item.died / 100)}</td>
  `;

  table.appendChild(tr);
});

// Have a good day :3
