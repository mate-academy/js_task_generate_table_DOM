'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const properties = ['name', 'sex', 'born', 'died'];

for (const person of people) {
  const tr = document.createElement('tr');

  for (let i = 0; i < 6; i++) {
    const td = document.createElement('td');

    if (i === 4) {
      td.innerText = person[properties[3]] - person[properties[2]];
    } else if (i === 5) {
      td.innerText = Math.ceil(person[properties[3]] / 100);
    } else {
      td.innerText = person[properties[i]];
    }
    tr.append(td);
  }
  table.append(tr);
}
