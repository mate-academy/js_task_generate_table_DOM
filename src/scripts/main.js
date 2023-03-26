'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const addRow = function(person) {
  const copyPerson = { ...person };

  copyPerson.age = copyPerson.died - copyPerson.born;
  copyPerson.centyry = Math.ceil(copyPerson.died / 100);

  if (copyPerson.sex === 'm') {
    copyPerson.sex = 'Male';
  } else {
    copyPerson.sex = 'Female';
  };

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${copyPerson.name}</td>
  <td>${copyPerson.sex}</td>
  <td>${copyPerson.born}</td>
  <td>${copyPerson.died}</td>
  <td>${copyPerson.age}</td>
  <td>${copyPerson.centyry}</td>
  `;

  return tr;
};

table.append(...people.map(addRow));
