'use strict';

const people = require('./lib/people');
const dashboard = document
  .querySelector('.dashboard')
  .getElementsByTagName('tbody')[0];

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const row = document.createElement('tr');
  const nameCell = row.insertCell();
  const sexCell = row.insertCell();
  const bornCell = row.insertCell();
  const diedCell = row.insertCell();
  const ageCell = row.insertCell();
  const centuryCell = row.insertCell();

  const personName = document.createTextNode(person.name);

  nameCell.appendChild(personName);

  const personSex = person.sex === 'm'
    ? document.createTextNode('Male')
    : document.createTextNode('Female');

  sexCell.appendChild(personSex);

  const personBorn = document.createTextNode(person.born);

  bornCell.appendChild(personBorn);

  const personDied = document.createTextNode(person.died);

  diedCell.appendChild(personDied);

  const personAge = document.createTextNode(age);

  ageCell.appendChild(personAge);

  const personCentury = document.createTextNode(century);

  centuryCell.appendChild(personCentury);

  dashboard.appendChild(row);
});
