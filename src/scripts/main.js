'use strict';

const people = require('./lib/people');

function addPeopleToTable(peopleArr) {
  const table = document.querySelector('.dashboard');

  for (const person of people) {
    const tr = document.createElement('tr');
    const thAge = document.createElement('th');
    const thCentury = document.createElement('th');

    for (const elem in person) {
      const th = document.createElement('th');

      if (elem !== 'fatherName' && elem !== 'motherName' && elem !== 'slug') {
        th.textContent = person[elem];
        tr.append(th);
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
