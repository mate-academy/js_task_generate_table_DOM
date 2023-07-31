'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const newRow = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSex = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.textContent = person.name;
  tdSex.textContent = gender;
  tdBorn.textContent = person.born;
  tdDied.textContent = person.died;
  tdAge.textContent = age;
  tdCentury.textContent = century;

  newRow.innerHTML = `
  <td>${person.name}</td>
  <td>${gender}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${age}</td>
  <td>${century}</td>
  `;

  table.appendChild(newRow);
}
