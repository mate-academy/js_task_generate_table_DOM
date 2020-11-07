'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  dashboard.append(row);

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const headings
    = [person.name, person.sex, person.born, person.died, age, century];

  for (const heading of headings) {
    const th = document.createElement('th');

    th.textContent = heading;

    row.append(th);
  }
};
