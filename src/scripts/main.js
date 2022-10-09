'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
let count = 1;

people.forEach(person => {
  table.insertRow();

  const row = document.querySelectorAll('tr');

  row[count].insertCell(0).innerText = person.name;
  row[count].insertCell(1).innerText = person.sex === 'm' ? 'Male' : 'Female';
  row[count].insertCell(2).innerText = person.born;
  row[count].insertCell(3).innerText = person.died;
  row[count].insertCell(4).innerText = person.died - person.born;
  row[count].insertCell(5).innerText = Math.ceil(person.died / 100);
  count++;
});
