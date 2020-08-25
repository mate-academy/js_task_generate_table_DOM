'use strict';

const people = require('./lib/people');

function addPeopleToTable(peopleArr) {
  const table = document.querySelector('.dashboard');

  for (const person of people) {
    const tr = document.createElement('tr');
    const thAge = document.createElement('th');
    const thCentury = document.createElement('th');

    for (const elem in person) {
      const td = document.createElement('td');

      if (elem === 'sex') {
        person[elem] === 'm'
          ? td.textContent = 'Male'
          : td.textContent = 'Female';
        tr.append(td);
      }

      if (elem !== 'fatherName' && elem !== 'motherName' && elem !== 'slug') {
        td.textContent = person[elem];
        tr.append(td);
      }
    }

    thAge.textContent = person.died - person.born;
    thCentury.textContent = Math.ceil(person.died / 100);

    tr.append(thAge);
    tr.append(thCentury);
    table.append(tr);
  }
}

addPeopleToTable(people);
