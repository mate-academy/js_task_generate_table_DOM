'use strict';

const people = require('./lib/people');
const container = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const sex = person.sex === 'f' ? 'Female' : 'Male';

  row.insertAdjacentHTML('beforeend', `
  <td>${person.name}</td>
  `);

  row.insertAdjacentHTML('beforeend', `
  <td>${sex}</td>
  `);

  row.insertAdjacentHTML('beforeend', `
  <td>${person.born}</td>
  `);

  row.insertAdjacentHTML('beforeend', `
  <td>${person.died}</td>
  `);

  row.insertAdjacentHTML('beforeend', `
  <td>${person.died - person.born}</td>
  `);

  row.insertAdjacentHTML('beforeend', `
  <td>${Math.ceil(person.died / 100)}</td>
  `);

  container.append(row);
});

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
