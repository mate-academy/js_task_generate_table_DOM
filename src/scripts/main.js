'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

// write your code here
const dashboard = document.querySelector(`.dashboard`);

people.forEach(el => {
  const table = document.createElement(`tr`);
  const century = Math.ceil(el.died / 100);

  table.innerHTML
     = `
      <td>${el.name}</td>
      <td>${(el.sex === 'm') ? 'Male' : 'Female'}</td>
      <td>${el.born}</td>
      <td>${el.died}</td>
      <td>${el.died - el.born}</td>
      <td>${century}</td>
    `;
  dashboard.appendChild(table);
});
