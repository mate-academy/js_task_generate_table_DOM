'use strict';

const people = require('./lib/people');
const table = document.querySelector('table');

const myPeople = people.map(human => {
  return {
    name: human.name,
    sex: human.sex,
    born: human.born,
    died: human.died,
    age: human.died - human.born,
    century: Math.ceil(human.died / 100),
  };
});

const columns = ['name', 'sex', 'born', 'died', 'age', 'century'];

for (const human of myPeople) {
  const newRow = table.insertRow();

  for (const cell of columns) {
    const newCell = newRow.insertCell();

    newCell.appendChild(document.createTextNode(human[cell]));
  }
}
