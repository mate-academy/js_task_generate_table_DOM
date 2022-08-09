'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const key of people) {
  const row = table.insertRow();
  const cell = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);
  const text = document.createTextNode(key.name);
  const text1 = document.createTextNode(key.sex);
  const text2 = document.createTextNode(key.born);
  const text3 = document.createTextNode(key.died);
  const text4 = document.createTextNode(key.died - key.born);
  const text5 = document.createTextNode(Math.ceil(key.died / 100));

  cell.append(text);
  cell1.append(text1);
  cell2.append(text2);
  cell3.append(text3);
  cell4.append(text4);
  cell5.append(text5);
}
