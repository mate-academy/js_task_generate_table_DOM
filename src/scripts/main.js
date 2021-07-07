'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard tbody');

people.forEach(human => {
  const { name, born, died } = human;
  const sex = human.sex === 'm' ? 'Male' : 'Female';
  const century = Math.ceil(died / 100);

  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${name}</td>
      <td>${sex}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${century}</td>
    </tr>`
  );
});
