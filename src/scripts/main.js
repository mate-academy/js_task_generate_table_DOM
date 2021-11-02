'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard').firstElementChild;

for (const person of people) {
  const row = document.createElement('tr');

  const cellFirst = document.createElement('td');
  const cellSecond = document.createElement('td');
  const cellThird = document.createElement('td');
  const cellFourth = document.createElement('td');
  const cellFifth = document.createElement('td');
  const cellSixth = document.createElement('td');

  cellFirst.textContent = person.name;
  cellSecond.textContent = person.sex === 'm' ? 'Male' : 'Female';
  cellThird.textContent = person.born;
  cellFourth.textContent = person.died;
  cellFifth.textContent = person.died - person.born;
  cellSixth.textContent = Math.ceil(person.died / 100);

  row.append(cellFirst);
  row.append(cellSecond);
  row.append(cellThird);
  row.append(cellFourth);
  row.append(cellFifth);
  row.append(cellSixth);

  table.append(row);
}
