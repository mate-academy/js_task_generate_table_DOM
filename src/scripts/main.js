'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

people.map(person => {
  const { name, sex, born, died } = person;

  dashboard.insertAdjacentHTML('beforeend',
    `<tr>
      <th>${name}</th>
      <th>${sex}</th>
      <th>${born}</th>
      <th>${died}</th>
      <th>${died - born}</th>
      <th>${Math.ceil(died / 100)}</th>
    </tr>`
  );
});
