'use strict';

import people from './lib/people.json';

(function render() {
  const table = document.querySelector('.dashboard');

  if (!table) {
    return;
  }

  let tbody = table.querySelector('tbody');

  if (!tbody) {
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
  }

  people.forEach((person) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');

    tdName.textContent = person.name;

    const tdGender = document.createElement('td');

    tdGender.textContent =
      person.gender ?? (person.sex === 'm' ? 'Male' : 'Female');

    const tdBorn = document.createElement('td');

    tdBorn.textContent = person.born;

    const tdDied = document.createElement('td');

    tdDied.textContent = person.died;

    const tdAge = document.createElement('td');

    tdAge.textContent = person.died - person.born;

    const tdCentury = document.createElement('td');

    tdCentury.textContent = Math.ceil(person.died / 100);

    tr.append(tdName, tdGender, tdBorn, tdDied, tdAge, tdCentury);
    tbody.appendChild(tr);
  });
})();
