'use strict';

const people = require('./lib/people');
const table = document.querySelector('table');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const obj of people) {
  const row = document.createElement('tr');

  const cellname = document.createElement('td');

  cellname.textContent = obj.name;

  const gender = document.createElement('td');

  (obj.sex === 'm') ? gender.textContent = 'Male'
    : gender.textContent = 'Female';

  const born = document.createElement('td');

  born.textContent = obj.born;

  const died = document.createElement('td');

  died.textContent = obj.died;

  const age = document.createElement('td');

  age.textContent = obj.died - obj.born;

  const century = document.createElement('td');

  century.textContent = Math.ceil(obj.died / 100);

  row.append(cellname);
  row.append(gender);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);

  table.append(row);
}
