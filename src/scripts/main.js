'use strict';

const people = require('./lib/people');

for (let i = 0; i < people.length; i++) {
  people[i].age = people[i].died - people[i].born;
  people[i].century = Math.ceil(people[i].died / 100);

  if (people[i].sex === 'm') {
    people[i].gender = 'Male';
  } else {
    people[i].gender = 'Female';
  };
}

const table = document.querySelector('.dashboard');

const heading = document.querySelectorAll('th');

const items = [];

for (let j = 0; j < heading.length; j++) {
  items.push(heading[j].textContent.toLowerCase());
};

for (let x = 0; x < people.length; x++) {
  const row = document.createElement('tr');

  for (const item of items) {
    const cell = document.createElement('td');

    cell.textContent = people[x][item];
    row.append(cell);
  };

  table.insertAdjacentElement('beforeend', row);
};
