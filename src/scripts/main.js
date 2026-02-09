'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

if (table) {
  const tbody = table.querySelector('tbody') || table;

  people.forEach((person) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');

    tdName.textContent = person.name;

    const tdGender = document.createElement('td');

    tdGender.textContent = person.sex === 'm' ? 'Male' : 'Female';

    const tdBorn = document.createElement('td');

    tdBorn.textContent = person.born;

    const tdDied = document.createElement('td');

    tdDied.textContent = person.died;

    const tdAge = document.createElement('td');

    const age = person.died - person.born;

    tdAge.textContent = age;

    const tdCentury = document.createElement('td');

    const century = Math.ceil(person.died / 100);

    tdCentury.textContent = century;

    tr.append(tdName, tdGender, tdBorn, tdDied, tdAge, tdCentury);
    tbody.append(tr);
  });
}
