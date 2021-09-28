'use strict';

const people = require('./lib/people');


function getCentury(dateOfDeath) {
  return Math.ceil(dateOfDeath / 100);
}

function getGenderString(gender) {
  return gender === 'f'
    ? 'Female'
    : 'Male';
}

function populateTable(table, data) {
  for (const item of data) {
    const itemCopy = {
      name: item.name,
      gender: getGenderString(item.sex),
      born: item.born,
      died: item.died,
      age: item.died - item.born,
      century: getCentury(item.died),
    };

    const row = table.insertRow();

    for (const key in itemCopy) {
      row.insertCell().textContent = itemCopy[key];
    }
  }
}

const tableEl = document.querySelector('table');

populateTable(tableEl, people);
