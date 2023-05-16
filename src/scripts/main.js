'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard > tbody');

// write your code here
for (let i = 0; i < 6; i++) {
  const row = document.createElement('tr');
  const rowItemName = document.createElement('th');

  rowItemName.textContent = people[i].name;

  const rowItemGender = document.createElement('th');

  if (people[i].sex === 'm') {
    rowItemGender.textContent = 'Male';
  } else if (people[i].sex === 'f') {
    rowItemGender.textContent = 'Female';
  } else {
    rowItemGender.textContent = people[i].sex;
  }

  const rowItemBorn = document.createElement('th');

  rowItemBorn.textContent = people[i].born;

  const rowItemDied = document.createElement('th');

  rowItemDied.textContent = people[i].died;

  const rowItemAge = document.createElement('th');

  rowItemAge.textContent = people[i].died - people[i].born;

  const rowItemCentury = document.createElement('th');

  rowItemCentury.textContent = Math.ceil(people[i].died / 100);

  row.append(rowItemName);
  row.append(rowItemGender);
  row.append(rowItemBorn);
  row.append(rowItemDied);
  row.append(rowItemAge);
  row.append(rowItemCentury);

  table.append(row);
}
