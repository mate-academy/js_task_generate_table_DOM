'use strict';

const people = require('./lib/people');
const tableElement = document.querySelector('.dashboard');

for (const person of people) {
  const trElement = document.createElement('tr');

  tableElement.append(trElement);

  trElement.innerHTML = `
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>
  `;
}
