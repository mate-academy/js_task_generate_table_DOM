'use strict';

const people = require('./lib/people.json');

const table = document.querySelector('.dashboard');

people.forEach(human => {
  const { sex, born, died } = human;
  const gender = (personSex) => personSex === 'm' ? 'Male' : 'Female';
  const nameHuman = human.name;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const arr = [nameHuman, gender(sex), born, died, age, century];
  const row = document.createElement('tr');

  for (const iterator of arr) {
    row.innerHTML += `<td>${iterator}</td>`;
  }

  if (table) {
    table.appendChild(row);
  }
});
