'use strict';

const people = require('./lib/people');

// find a table with class dashboard in the document.

const tableTag = document.querySelector('.dashboard');

// function returns full gender word

function genderItem(sex) {
  if (sex === 'm') {
    return 'Male';
  }

  return 'Female';
}

// add age and century properties to each object

for (const item of people) {
  item.age = item.died - item.born;
  item.century = Math.ceil(item.died / 100);
  item.sex = genderItem(item.sex);
}

// function that returns the row with 6 cells person info

function genRow(person) {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML += `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  `;

  return tableRow;
}

// get array of rows

const rowsArray = people.map(genRow);

// append created row to table

for (const personRow of rowsArray) {
  tableTag.append(personRow);
}
