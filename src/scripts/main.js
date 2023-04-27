'use strict';

const people = require('./lib/people.json');

const table = document.querySelector('.dashboard');

people.forEach(human => {
  const { sex, born, died } = human;
  const gender = (sex) => sex === 'm' ? 'Male' : 'Famele';
  const nameHuman = human.name;
  const age = human.died - human.born;
  const century = Math.ceil(human.died / 100);
  const arr = [nameHuman, gender(sex), born, died, age, century];
  const row = document.createElement('tr');

  for (let i = 0; i < arr.length; i++) {
    const cell = document.createElement('td');

    cell.textContent = `${arr[i]}`;
    row.appendChild(cell);
  }

  if (table) {
    table.appendChild(row);
  }
});
