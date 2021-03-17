'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard tbody');

for (const person of people) {
  const tr = document.createElement('tr');

  table.append(tr);

  const tdName = document.createElement('td');

  tdName.textContent = person.name;
  tr.append(tdName);

  const tdGender = document.createElement('td');

  if (person.sex === 'f') {
    tdGender.textContent = 'Female';
  }

  if (person.sex === 'm') {
    tdGender.textContent = 'Male';
  }

  tr.append(tdGender);

  const tdBorn = document.createElement('td');

  tdBorn.textContent = person.born;
  tr.append(tdBorn);

  const tdDied = document.createElement('td');

  tdDied.textContent = person.died;
  tr.append(tdDied);

  const tdAge = document.createElement('td');

  tdAge.textContent = person.died - person.born;
  tr.append(tdAge);

  const tdCenture = document.createElement('td');

  tdCenture.textContent = Math.ceil(person.died / 100);
  tr.append(tdCenture);
}
