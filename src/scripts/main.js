'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const length = document.getElementsByTagName('th').length;

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const { name, sex, born, died } = people[i];
  const age = died - born;
  const century = Math.ceil(died / 100);

  for (let j = 0; j < length; j++) {
    const column = document.createElement('td');
    let columnText = '';

    switch (j) {
      case 0: {
        columnText = document.createTextNode(name);
        break;
      }

      case 1: {
        columnText = document.createTextNode(sex);
        break;
      }

      case 2: {
        columnText = document.createTextNode(born);
        break;
      }

      case 3: {
        columnText = document.createTextNode(died);
        break;
      }

      case 4: {
        columnText = document.createTextNode(age);
        break;
      }

      case 5: {
        columnText = document.createTextNode(century);
        break;
      }

      default: {
        return 'Error';
      }
    }
    column.append(columnText);
    row.append(column);
  }
  table.append(row);
}
