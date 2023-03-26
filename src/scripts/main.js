'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const addRow = function(person) {
  person.age = person.died - person.born;
  person.centyry = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  };

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age}</td>
  <td>${person.centyry}</td>
  `;

  return tr;
};

table.append(...people.map(addRow));
