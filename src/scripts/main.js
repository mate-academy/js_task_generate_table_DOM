'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (let i = 0; i < people.length; i++) {
  const item = document.createElement('tr');
  const mass = [people[i].name, people[i].sex,
    people[i].born, people[i].died,
    people[i].died - people[i].born, Math.ceil(people[i].died / 100)];

  for (let j = 0; j < mass.length; j++) {
    const elem = document.createElement('td');

    if (mass[j] === 'f') {
      elem.textContent = 'Female';
    } else if (mass[j] === 'm') {
      elem.textContent = 'Male';
    } else {
      elem.textContent = mass[j];
    }
    item.append(elem);
  }
  table.append(item);
}
