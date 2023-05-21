'use strict';

const people = require('./lib/people');

const dash = document.querySelector('.dashboard');

function addData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const newRow = dash.insertRow(i + 1);
    let personBorn;

    for (const j in arr[i]) {
      let newCell;
      let newText;

      switch (j) {
        case 'name':
          newCell = newRow.insertCell(0);
          newText = document.createTextNode(`${arr[i][j]}`);

          newCell.append(newText);
          break;
        case 'sex':
          newCell = newRow.insertCell(1);

          if (arr[i][j] === 'm') {
            newText = document.createTextNode(`Male`);
          } else {
            newText = document.createTextNode(`Female`);
          }

          newCell.append(newText);
          break;
        case 'born':
          newCell = newRow.insertCell(2);
          newText = document.createTextNode(`${arr[i][j]}`);
          personBorn = arr[i][j];

          newCell.append(newText);
          break;
        case 'died':
          newCell = newRow.insertCell(3);
          newText = document.createTextNode(`${arr[i][j]}`);

          const ageCell = newRow.insertCell(4);
          const ageText = arr[i][j] - personBorn;

          const centuryCell = newRow.insertCell(5);
          const centuryText = Math.ceil(arr[i][j] / 100);

          newCell.append(newText);
          ageCell.append(ageText);
          centuryCell.append(centuryText);
          break;
        default:
          continue;
      }
    }
  }
}

addData(people);
