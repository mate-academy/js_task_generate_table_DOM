'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);

  table.children[0].insertAdjacentHTML('beforeend',
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
