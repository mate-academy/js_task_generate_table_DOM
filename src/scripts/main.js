'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');

  tdName.textContent = person.name;
  tr.append(tdName);

  const tdGender = document.createElement('td');

  tdGender.textContent = person.sex === 'f' ? 'Female' : 'Male';
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

  const tdCentury = document.createElement('td');

  tdCentury.textContent = Math.ceil(person.died / 100);
  tr.append(tdCentury);

  table.append(tr);
}
