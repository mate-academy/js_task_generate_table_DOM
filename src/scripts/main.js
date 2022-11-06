'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  person.sex = person.sex === 'm' ? 'Male' : 'Female';

  const values = Object.values(person).splice(0, 4);

  values.push(person.died - person.born);
  values.push(Math.ceil(person.died / 100));

  const string = document.createElement('tr');

  for (const value of values) {
    string.insertAdjacentHTML('beforeend', `
    <td>
    ${value}
    </td>
    `);
  }

  table.append(string);
}
