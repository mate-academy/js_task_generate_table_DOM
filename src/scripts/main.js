'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard > tbody');

// write your code here
for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const rowItemName = document.createElement('td');

  rowItemName.textContent = people[i].name;

  const rowItemGender = document.createElement('td');

  rowItemGender.textContent
    = people[i].sex === 'm' ? 'Male'
      : people[i].sex === 'f' ? 'Female'
        : people[i].sex;

  const rowItemBorn = document.createElement('td');

  rowItemBorn.textContent = people[i].born;

  const rowItemDied = document.createElement('td');

  rowItemDied.textContent = people[i].died;

  const rowItemAge = document.createElement('td');

  rowItemAge.textContent = people[i].died - people[i].born;

  const rowItemCentury = document.createElement('td');

  rowItemCentury.textContent = Math.ceil(people[i].died / 100);

  row.append(rowItemName);
  row.append(rowItemGender);
  row.append(rowItemBorn);
  row.append(rowItemDied);
  row.append(rowItemAge);
  row.append(rowItemCentury);

  table.append(row);
}
