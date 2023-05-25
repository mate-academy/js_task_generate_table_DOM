'use strict';

const people = require('./lib/people');

const tr = document.querySelector('tr');

const putLibraryOnTable = () => {
  for (let i = 0; i < people.length; i++) {
    const row = document.createElement('tr');
    const objectKeys = Object.keys(people[i]);

    for (let j = 0; j < 6; j++) {
      const element = document.createElement('td');

      element.textContent = people[i][objectKeys[j]];

      if (j === 5) {
        element.textContent = Math.ceil(people[i].died / 100);
      }

      if (j === 4) {
        element.textContent = people[i].died - people[i].born;
      }

      row.appendChild(element);
    }

    tr.insertAdjacentElement('afterend', row);
  }
};

putLibraryOnTable();
