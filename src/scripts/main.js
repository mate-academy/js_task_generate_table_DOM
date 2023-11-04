'use strict';

const people = require('./lib/people');
const tableElement = document.querySelector('.dashboard');

for (const person of people) {
  const trElement = document.createElement('tr');

  tableElement.append(trElement);

  const tdName = document.createElement('td');

  tdName.textContent = `${person.name}`;
  trElement.append(tdName);

  const tdGender = document.createElement('td');

  tdGender.textContent = `${person.sex}`;
  trElement.append(tdGender);

  const tdBorn = document.createElement('td');

  tdBorn.textContent = `${person.born}`;
  trElement.append(tdBorn);

  const tdDied = document.createElement('td');

  tdDied.textContent = `${person.died}`;
  trElement.append(tdDied);

  const tdAge = document.createElement('td');

  tdAge.textContent = `${person.died - person.born}`;
  trElement.append(tdAge);

  const tdCentury = document.createElement('td');

  tdCentury.textContent = `${Math.ceil(person.died / 100)}`;
  trElement.append(tdCentury);
}
