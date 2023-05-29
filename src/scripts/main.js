'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
const cellCount = 6;

people.forEach((person) => {
  const newRow = table.insertRow();

  const cells = [];

  for (let i = 0; i < cellCount; i++) {
    cells[i] = newRow.insertCell();
  }

  if (person.sex === 'm') {
    cells[1].innerHTML = 'Male';
  } else {
    cells[1].innerHTML = 'Female';
  }

  cells[0].innerHTML = person.name;
  cells[2].innerHTML = person.born;
  cells[3].innerHTML = person.died;
  cells[4].innerHTML = person.died - person.born;
  cells[5].innerHTML = Math.ceil(person.died / 100);
});
