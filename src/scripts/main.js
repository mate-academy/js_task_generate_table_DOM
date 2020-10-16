'use strict';

const people = require('./lib/people');

function getpeopleFullData() {
  for (const person of people) {
    person.age = person.died - person.born;
    person.century = Math.ceil(person.died / 100);
  }
}
getpeopleFullData();

function createTableforPeople() {
  const table = document.querySelector('.dashboard');

  for (const person of people) {
    const tableRow = document.createElement('tr');

    delete person.motherName;
    delete person.fatherName;
    delete person.slug;

    person.sex === 'm' ? person.sex = 'Male' : person.sex = 'Female';

    const personProperties = Object.values(person);

    table.append(tableRow);

    for (let i = 0; i <= personProperties.length - 1; i++) {
      const tableData = document.createElement('td');

      tableData.innerText = personProperties[i];
      tableRow.append(tableData);
    }
  }
}
createTableforPeople();
