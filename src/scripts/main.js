'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const information = ['name', 'sex', 'born', 'died', 'age', 'century'];

for (const man of people) {
  const row = document.createElement('tr');

  for (const info of information) {
    const manInfo = document.createElement('td');

    manInfo.textContent = man[info];

    if (info === 'sex') {
      manInfo.textContent = man.sex === 'm'
        ? 'Male'
        : 'Female';
    } else if (info === 'age') {
      manInfo.textContent = man.died - man.born;
    } else if (info === 'century') {
      manInfo.textContent = Math.ceil(man.died / 100);
    }

    row.append(manInfo);
  }

  table.append(row);
}
