'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const element = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const firstCell = document.createElement('td');

  firstCell.textContent = people[i].name;
  row.append(firstCell);

  const secondCell = document.createElement('td');

  secondCell.textContent = people[i].sex;
  row.append(secondCell);

  const thirdCell = document.createElement('td');

  thirdCell.textContent = people[i].born;
  row.append(thirdCell);

  const fourthCell = document.createElement('td');

  fourthCell.textContent = people[i].died;
  row.append(fourthCell);

  const fifthCell = document.createElement('td');

  fifthCell.textContent = people[i].died - people[i].born;
  row.append(fifthCell);

  const sixthCell = document.createElement('td');

  sixthCell.textContent = Math.ceil(people[i].died / 100);
  row.append(sixthCell);

  element.append(row);
}
