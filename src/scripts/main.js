'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard').firstElementChild;

people.forEach(({ name: namePerson, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);

  table.insertAdjacentHTML(
    'beforeend',
    `<tr class = 'tr'>
      <td>${namePerson}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`
  );
});
