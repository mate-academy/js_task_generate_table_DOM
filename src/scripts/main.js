'use strict';

const people = require('./lib/people');

const tbody = document.querySelector('tbody');
const tContent = document.createDocumentFragment();

people.map(person => {
  const tr = document.createElement('tr');

  tContent.appendChild(tr);

  const property = Object.values(person).slice(0, 4);

  property.push(person.died - person.born);
  property.push(Math.ceil(person.died / 100));

  for (let i = 0; i < 6; i++) {
    const td = document.createElement('td');

    if (property[i] === 'm') {
      td.textContent = 'Male';
    } else if (property[i] === 'f') {
      td.textContent = 'Female';
    } else {
      td.textContent = property[i];
    };

    tr.append(td);
  }

  tbody.appendChild(tContent);
});
