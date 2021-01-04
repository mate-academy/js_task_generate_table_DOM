'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableBody = document.querySelector('.dashboard').children[0];

for (const person of people) {
  const infoRow = document.createElement('tr');

  const personNameData = document.createElement('td');
  const personGenderData = document.createElement('td');
  const personBirthData = document.createElement('td');
  const personDeathData = document.createElement('td');
  const personAgeData = document.createElement('td');
  const personCenturyData = document.createElement('td');

  personNameData.innerText = person.name;
  infoRow.append(personNameData);
  personGenderData.innerText = person.sex === 'f' ? 'Female' : 'Male';
  infoRow.append(personGenderData);
  personBirthData.innerText = person.born;
  infoRow.append(personBirthData);
  personDeathData.innerText = person.died;
  infoRow.append(personDeathData);
  personAgeData.innerText = person.died - person.born;
  infoRow.append(personAgeData);
  personCenturyData.innerText = Math.ceil(person.died / 100);
  infoRow.append(personCenturyData);

  tableBody.append(infoRow);
}
