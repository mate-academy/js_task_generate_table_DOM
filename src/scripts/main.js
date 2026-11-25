'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

function createTable(list) {
  list.forEach((person) => {
    const personName = person.name;
    const gender = getGender(person.sex);
    const born = person.born;
    const died = person.died;
    const age = getAge(person);
    const century = getCentury(person);

    table.appendChild(createRow(personName, gender, born, died, age, century));
  });
}

function getAge(obj) {
  return obj.died - obj.born;
}

function getCentury(obj) {
  return Math.ceil(obj.died / 100);
}

function getGender(str) {
  return str === 'f' ? 'Female' : 'Male';
}

function createRow(...args) {
  const tableRow = document.createElement('tr');

  for (let i = 0; i < args.length; i++) {
    const tableData = document.createElement('td');

    tableData.textContent = args[i];
    tableRow.appendChild(tableData);
  }

  return tableRow;
}

createTable(people);
