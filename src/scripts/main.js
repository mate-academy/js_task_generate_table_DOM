'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const human of people) {
  const row = document.createElement('tr');

  for (let i = 0; i < 6; i++) {
    row.append(document.createElement('td'));
  }

  row.children[0].innerText = human.name;
  row.children[1].innerText = human.sex === 'm' ? 'Male' : 'Female';
  row.children[2].innerText = human.born;
  row.children[3].innerText = human.died;
  row.children[4].innerText = human.died - human.born;
  row.children[5].innerText = Math.ceil(human.died / 100);

  table.append(row);
}
