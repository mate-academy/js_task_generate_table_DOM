'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
const names = people.map(person => person.name);
const gender = people.map(person => person.sex === 'm' ? 'Male' : 'Female');
const bornYear = people.map(person => person.born);
const dieYear = people.map(person => person.died);

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < 6; j++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  table.appendChild(row);
  row.children[0].innerText = names[i];
  row.children[1].innerText = gender[i];
  row.children[2].innerText = bornYear[i];
  row.children[3].innerText = dieYear[i];
  row.children[4].innerText = dieYear[i] - bornYear[i];
  row.children[5].innerText = Math.ceil(dieYear[i] / 100);
}
