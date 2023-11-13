'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

const genderDescription = (sex) => {
  switch (sex) {
    case 'm':
      return 'Male';
    case 'f':
      return 'Female';
  }
};

for (const person of people) {
  const tableRow = tableElement.insertRow();

  tableRow.insertCell(0).innerText = person.name;
  tableRow.insertCell(1).innerText = genderDescription(person.sex);
  tableRow.insertCell(2).innerText = person.born;
  tableRow.insertCell(3).innerText = person.died;
  tableRow.insertCell(4).innerText = person.died - person.born;
  tableRow.insertCell(5).innerText = Math.ceil(person.died / 100);
}
