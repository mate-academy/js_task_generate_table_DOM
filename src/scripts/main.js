'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
function generateTable(table) {
  for (const person of people) {
    const newRow = document.createElement('tr');
    const personName = document.createElement('td');
    const personSex = document.createElement('td');
    const personBorn = document.createElement('td');
    const personDied = document.createElement('td');
    const personAge = document.createElement('td');
    const personCentuaty = document.createElement('td');

    personName.innerText = person.name;
    personSex.innerText = person.sex;
    personBorn.innerText = person.born;
    personDied.innerText = person.died;
    personAge.innerText = person.died - person.born;
    personCentuaty.innerText = Math.ceil(person.died / 100);

    newRow.appendChild(personName);
    newRow.appendChild(personSex);
    newRow.appendChild(personBorn);
    newRow.appendChild(personDied);
    newRow.appendChild(personAge);
    newRow.appendChild(personCentuaty);

    table.appendChild(newRow);
  }
}

const dashboard = document.querySelector('.dashboard');

generateTable(dashboard);
