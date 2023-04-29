'use strict';

const people = require('./lib/people.json');

const table = document.querySelector('.dashboard');

people.forEach(human => {
  const { sex, born, died } = human;
  const gender = (personSex) => personSex === 'm' ? 'Male' : 'Famele';
  const nameHuman = human.name;
  const age = died - born;
  const century = Math.ceil(human.died / 100);
  const arr = [nameHuman, gender(sex), born, died, age, century];
  const row = document.createElement('tr');

  for (let i = 0; i < arr.length; i++) {
    row.innerHTML += `<td>${arr[i]}</td>`;
  }

  if (table) {
    table.appendChild(row);
  }
});
