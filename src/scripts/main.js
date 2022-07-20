'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const human of people) {
  const row = document.createElement('tr');
  let humanName;
  let humanGender;
  let humanBorn;
  let humanDied;
  let humanAge;
  let humanCen;

  for (let i = 0; i < table.children[0].cells.length; i++) {
    const property = table.children[0].cells[i].textContent;

    switch (property) {
      case 'Name' :
        humanName = human.name;
        break;
      case 'Gender' :
        humanGender = (human.sex === 'f' ? 'Female' : 'Male');
        break;
      case 'Born' :
        humanBorn = human.born;
        break;
      case 'Died' :
        humanDied = human.died;
        break;
      case 'Age' :
        humanAge = human.died - human.born;
        break;
      case 'Century' :
        humanCen = Math.ceil(human.died / 100);
        break;
    }
  }

  row.insertAdjacentHTML('afterbegin', `
    <td>${humanName}</td>
    <td>${humanGender}</td>
    <td>${humanBorn}</td>
    <td>${humanDied}</td>
    <td>${humanAge}</td>
    <td>${humanCen}</td>
  `);

  table.append(row);
}
