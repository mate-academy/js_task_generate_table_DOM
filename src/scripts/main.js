'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const gender = () => {
    if (person.sex === 'm') {
      return 'Male';
    }

    return 'Female';
  };

  tr.insertAdjacentHTML('beforeend', `

    <td>${person.name}</td>
    <td>${gender(person)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td> 

  `);

  table.append(tr);
};
