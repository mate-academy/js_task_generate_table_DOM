'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach((person, index) => {
  table.insertRow();

  const row = document.querySelectorAll('tr');

  row[index + 1].insertCell(0).innerText = person.name;

  row[index + 1].insertCell(1).innerText = person.sex
  === 'm' ? 'Male' : 'Female';

  row[index + 1].insertCell(2).innerText = person.born;
  row[index + 1].insertCell(3).innerText = person.died;
  row[index + 1].insertCell(4).innerText = person.died - person.born;
  row[index + 1].insertCell(5).innerText = Math.ceil(person.died / 100);
});
