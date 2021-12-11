'use strict';

const people = require('./lib/people');

function getCentury(dateOfDearth) {
  return Math.ceil(dateOfDearth / 100);
}

function getGender(gender) {
  return gender === 'f'
    ? 'Female'
    : 'Male';
}

function generateTable(table, data) {
  for (const item of data) {
    const newItem = {
      name: item.name,
      gender: getGender(item.sex),
      born: item.born,
      died: item.died,
      age: item.died - item.born,
      century: getCentury(item.died),
    };

    const row = table.insertRow();

    for (const key in newItem) {
      row.insertCell().textContent = newItem[key];
    }
  }
}

const tableElement = document.querySelector('.dashboard');

generateTable(tableElement, people);
