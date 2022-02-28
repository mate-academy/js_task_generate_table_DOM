'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard tbody');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const sex = person.sex === 'm' ? 'male' : 'female';

  table.insertAdjacentHTML('beforeend', `
    <td>${person.name}<td/>
    <td>${sex}<td/>
    <td>${person.born}<td/>
    <td>${person.died}<td/>
    <td>${age}<td/>
    <td>${century}<td/>`
  );
}
