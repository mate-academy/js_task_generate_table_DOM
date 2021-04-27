'use strict';

const people = require('./lib/people');

for (let i = 0; i < people.length; i++) {
  people[i].age = people[i].died - people[i].born;
  people[i].century = Math.ceil(people[i].died / 100);

  (people[i].sex === 'm')
    ? people[i].gender = 'Male'
    : people[i].gender = 'Female';
};

const table = document.querySelector('.dashboard');

const heading = document.querySelectorAll('th');

const items = [];

for (let i = 0; i < heading.length; i++) {
  items.push(heading[i].textContent.toLowerCase());
};

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');

  for (const item of items) {
    const cell = document.createElement('td');

    cell.textContent = people[i][item];
    row.append(cell);
  };

  table.insertAdjacentElement('beforeend', row);
};
