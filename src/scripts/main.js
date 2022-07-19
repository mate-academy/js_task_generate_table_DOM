'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const human of people) {
  const row = document.createElement('tr');
  const humanName = document.createElement('td');
  const humanGender = document.createElement('td');
  const humanBorn = document.createElement('td');
  const humanDied = document.createElement('td');
  const humanAge = document.createElement('td');
  const humanCen = document.createElement('td');

  for (let i = 0; i < table.children[0].cells.length; i++) {
    const property = table.children[0].cells[i].textContent;

    switch (property) {
      case 'Name' :
        humanName.textContent = human.name;
        break;
      case 'Gender' :
        humanGender.textContent = (human.sex === 'f' ? 'Female' : 'Male');
        break;
      case 'Born' :
        humanBorn.textContent = human.born;
        break;
      case 'Died' :
        humanDied.textContent = human.died;
        break;
      case 'Age' :
        humanAge.textContent = human.died - human.born;
        break;
      case 'Century' :
        humanCen.textContent = Math.ceil(human.died / 100);
        break;
    }
  }
  row.append(humanName, humanGender, humanBorn, humanDied, humanAge, humanCen);
  table.append(row);
}
