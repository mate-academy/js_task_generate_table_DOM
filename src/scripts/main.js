'use strict';

const people = require('./lib/people');

const peopleDashboard = document.querySelector('.dashboard tbody');

people.map(person => {
  const { name, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);

  peopleDashboard.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${name}</td>
      <td>${sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`
  );
});
