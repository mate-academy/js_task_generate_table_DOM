'use strict';

const people = require('./lib/people');
const tableElement = document.querySelector('.dashboard');

for (const person of people) {
  const trElement = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tableElement.append(trElement);
  tdName.textContent = `${person.name}`;
  trElement.append(tdName);
  tdGender.textContent = `${person.sex}`;
  trElement.append(tdGender);
  tdBorn.textContent = `${person.born}`;
  trElement.append(tdBorn);
  tdDied.textContent = `${person.died}`;
  trElement.append(tdDied);
  tdAge.textContent = `${person.died - person.born}`;
  trElement.append(tdAge);
  tdCentury.textContent = `${Math.ceil(person.died / 100)}`;
  trElement.append(tdCentury);
}
