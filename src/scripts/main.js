'use strict';

import people from './lib/people.json';

const dashboard = document.querySelector('.dashboard');

people.forEach((person) => {
  const tr = document.createElement('tr');

  const values = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ];

  values.forEach((value) => {
    const td = document.createElement('td');

    td.textContent = value;
    tr.append(td);
  });

  dashboard.append(tr);
});
