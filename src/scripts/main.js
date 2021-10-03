'use strict';

const people = require('./lib/people');

const personArray = people
  .map(personObjects => Object.assign({}, personObjects));

personArray
  .forEach(person => {
    delete person.fatherName;
    delete person.motherName;
    delete person.slug;
    person.sex = (person.sex !== 'f') ? 'Male' : 'Female';
    person.age = person.died - person.born;
    person.century = Math.ceil(person.died / 100);
  });

const tables = document.querySelector('table');

for (const peoples of personArray) {
  const rowColumns = tables.insertRow();

  for (const key in peoples) {
    const cellColumns = rowColumns.insertCell();

    cellColumns.innerText = peoples[key];
  };
};
