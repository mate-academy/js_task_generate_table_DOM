'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-shadow
people.forEach(({ name, born, died, sex }) => {
  const gender = sex === 'f' ? 'Female' : 'Male';
  const age = died - born;
  const century = Math.ceil(died / 100);
  const row = document.createElement('tr');

  [name, gender, born, died, age, century].forEach(entry => {
    const data = document.createElement('td');

    data.textContent = entry;
    row.appendChild(data);
  });

  table.appendChild(row);
});
