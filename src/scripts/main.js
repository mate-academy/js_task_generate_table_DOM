'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard').children[0];

for (const person of people) {
  const trItem = document.createElement('tr');

  table.append(trItem);

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const data
   = [person.name, person.sex, person.born, person.died, age, century];

  for (const field of data) {
    const td = document.createElement('td');

    if (field === 'm') {
      td.textContent = 'Male';
    } else if (field === 'f') {
      td.textContent = 'Female';
    } else {
      td.textContent = field;
    }
    trItem.append(td);
  }
}
