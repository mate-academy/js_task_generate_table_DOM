'use strict';

const table = document.querySelector('.dashboard');

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const person of people) {
  const tr = document.createElement('tr');

  for (const key in person) {
    if (key === 'fatherName' || key === 'motherName' || key === 'slug') {
      continue;
    }

    const td = document.createElement('td');

    td.textContent = person[key];

    tr.append(td);
  }

  const tdWithAge = document.createElement('td');
  const tdWithCentury = document.createElement('td');
  const { born, died } = person;

  tdWithAge.textContent = died - born;
  tdWithCentury.textContent = Math.ceil(died / 100);
  tr.append(tdWithAge);
  tr.append(tdWithCentury);
  table.append(tr);
}
