'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard tbody');

people.map(person => {
  const { name, sex, born, died } = person;

  dashboard.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${name}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>`
  );
});
