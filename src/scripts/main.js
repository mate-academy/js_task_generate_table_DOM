'use strict';

const people = require('./lib/people');

const newPeople = people.map(person => ({ ...person }));
const table = document.querySelector('table');

newPeople
  .map(person => {
    delete person.fatherName;
    delete person.motherName;
    delete person.slug;
    person.age = person.died - person.born;
    person.century = Math.ceil(person.died / 100);
    person.sex = (person.sex === 'm') ? 'Male' : 'Female';
  });

for (const person of newPeople) {
  const row = table.insertRow();

  for (const data in person) {
    const call = row.insertCell();

    call.innerText = person[data];
  }
}
