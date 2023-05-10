'use strict';

const people = require('./lib/people');

const tableEl = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
        <td>${ person.name }</td>
        <td>${ getGender(person.sex) }</td>
        <td>${ person.born }</td>
        <td>${ person.died }</td>
        <td>${ person.died - person.born }</td>
        <td>${ getCentury(person.died) }</td>
    `);

  tableEl.append(row);
}

function getGender(sex) {
  return sex === 'f' ? 'Female' : 'Male';
}

function getCentury(died) {
  return Math.ceil(died / 100);
}
