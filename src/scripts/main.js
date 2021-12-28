'use strict';

const people = require('./lib/people');

for (const person of people) {
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>
  `);

  // const fullName = document.createElement('td');
  // const sex = document.createElement('td');
  // const born = document.createElement('td');
  // const died = document.createElement('td');
  // const age = document.createElement('td');
  // const century = document.createElement('td');

  // fullName.innerHTML = person.name;
  // sex.innerText = person.sex;
  // born.innerText = person.born;
  // died.innerHTML = person.died;
  // age.innerText = person.died - person.born;
  // century.innerText = Math.ceil(person.died / 100);

  // tableRow.append(fullName, sex, born, died, age, century);

  const table = document.querySelector('.dashboard');

  table.append(tableRow);
}
