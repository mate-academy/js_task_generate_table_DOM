'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  const td = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdСentury = document.createElement('td');

  td.append(person.name);
  tdGender.append(person.sex === 'm' ? 'Male' : 'Female');
  tdBorn.append(person.born);
  tdDied.append(person.died);
  tdAge.append(person.died - person.born);
  tdСentury.append(Math.ceil(person.died / 100));
  tr.append(td, tdGender, tdBorn, tdDied, tdAge, tdСentury);

  table.insertAdjacentElement('beforeend', tr);
}

// write your code here
