'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard').lastElementChild;
const cellNumber = table.rows[0].cells;

const addCell = (row, cellNum, array) => {
  for (let indX = 0; indX < cellNum.length; indX++) {
    const cell = document.createElement('td');

    cell.innerHTML = array[indX];
    row.append(cell);
  }

  return row;
};

function getTable(array, domElem, cellNum, callback) {
  array.forEach(element => {
    const row = document.createElement('tr');
    const { name, sex, born, died } = element;
    const age = died - born;
    const century = Math.ceil(died / 100);
    const arrFromElemObj = [];

    arrFromElemObj.push(name, sex, born, died, age, century);

    const filledRow = callback(row, cellNum, arrFromElemObj);

    domElem.append(filledRow);
  });
}

getTable(people, table, cellNumber, addCell);
