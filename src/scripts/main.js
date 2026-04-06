'use strict';

import people from '../scripts/lib/people.json';

function getAge(born, died) {
  return died - born;
}

function getCentury(year) {
  return Math.ceil(year / 100);
}

function getGender(sex) {
  const gender = sex === 'm' ? 'Male' : 'Female';

  return gender;
}

function createPersonLine(person, table) {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.textContent = person.name;
  tdGender.textContent = getGender(person.sex);
  tdBorn.textContent = person.born;
  tdDied.textContent = person.died;
  tdAge.textContent = getAge(person.born, person.died);
  tdCentury.textContent = getCentury(person.died);

  tr.appendChild(tdName);
  tr.appendChild(tdGender);
  tr.appendChild(tdBorn);
  tr.appendChild(tdDied);
  tr.appendChild(tdAge);
  tr.appendChild(tdCentury);

  table.appendChild(tr);
}

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  createPersonLine(person, dashboard);
}
