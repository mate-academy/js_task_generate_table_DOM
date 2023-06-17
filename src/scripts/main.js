'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');
const peopleData = people.map(person => {
  return {
    name: person.name,
    gender: person.sex === 'm' ? 'Male' : 'Female',
    born: person.born,
    died: person.died,
    age: person.died - person.born,
    century: Math.ceil(person.died / 100),
  };
});

function createTable(peopleList) {
  for (const item of peopleList) {
    const row = table.insertRow();

    for (const key in item) {
      const cell = row.insertCell();

      cell.append(item[key]);
    }
  }
}

createTable(peopleData);
