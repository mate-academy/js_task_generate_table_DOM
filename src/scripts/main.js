'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

people.map(item => {
  delete item.motherName;
  delete item.fatherName;
  delete item.slug;

  item.age = item.died - item.born;
  item.century = Math.ceil(item.died / 100);
});

for (const personObj of people) {
  const row = document.createElement('tr');

  table.append(row);

  for (const person in personObj) {
    const cell = document.createElement('td');

    row.append(cell);
    cell.textContent = personObj[person];
  }
}
