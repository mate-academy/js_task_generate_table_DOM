'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

[...people].forEach((person, indexPerson) => {
  const tr = document.createElement('tr');

  tr.insertCell(0).textContent = person.name;
  tr.insertCell(1).textContent = person.sex === 'm' ? 'Male' : 'Female';
  tr.insertCell(2).textContent = person.born;
  tr.insertCell(3).textContent = person.died;
  tr.insertCell(4).textContent = person.died - person.born;
  tr.insertCell(5).textContent = Math.ceil(person.died / 100);
  table.appendChild(tr);
});
