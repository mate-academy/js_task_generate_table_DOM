'use strict';

const people = require('./lib/people.json');

const dashboardTable = document.querySelector('.dashboard');

people.map(
  (person) => {
    const row = document.createElement('tr');

    dashboardTable.firstElementChild.appendChild(row);

    for (const type in person) {
      const pot = document.createElement('td');

      switch (type) {
        case 'fatherName':
          pot.innerText = person.died - person.born;
          row.appendChild(pot);
          continue;
        case 'motherName':
          pot.innerText = Math.round(person.died / 100);
          row.appendChild(pot);
          continue;
        case 'slug':
          continue;
        default:
          pot.innerText = person[type];
          row.appendChild(pot);
      }
    }

    return person;
  }
);
