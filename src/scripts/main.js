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

  humanName = `<td>${humanName}</td>`;
  humanGender = `<td>${humanGender}</td>`;
  humanBorn = `<td>${humanBorn}</td>`;
  humanDied = `<td>${humanDied}</td>`;
  humanAge = `<td>${humanAge}</td>`;
  humanCen = `<td>${humanCen}</td>`;

  row.insertAdjacentHTML('afterbegin', humanCen);
  row.insertAdjacentHTML('afterbegin', humanAge);
  row.insertAdjacentHTML('afterbegin', humanDied);
  row.insertAdjacentHTML('afterbegin', humanBorn);
  row.insertAdjacentHTML('afterbegin', humanGender);
  row.insertAdjacentHTML('afterbegin', humanName);

  table.append(row);
}
