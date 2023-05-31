'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.map(person => {
  person.century = Math.ceil(person.died / 100);
  person.age = person.died - person.born;

  (person.sex === 'f') ? person.sex = 'Female' : person.sex = 'Male';

  return person;
});

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const string = document.createElement('tr');

  table.append(string);

  string.innerHTML = `
      <tr>
        <th>${person.name}</th>
        <th>${person.sex}</th>
        <th>${person.born}</th>
        <th>${person.died}</th>
        <th>${person.age}</th>
        <th>${person.century}</th>
      </tr>
    `;
});
