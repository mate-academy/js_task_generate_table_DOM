'use strict';

import people from './people.json';

(function renderDashboard() {
  const dashboardTable = document.querySelector('table.dashboard');
  const currentYear = new Date().getFullYear();

  for (const person of people) {
    const row = document.createElement('tr');

    const tdName = document.createElement('td');

    tdName.textContent = person.name;
    row.appendChild(tdName);

    const tdGender = document.createElement('td');

    tdGender.textContent =
      person.sex === 'm' ? 'Male' : person.sex === 'f' ? 'Female' : '';
    row.appendChild(tdGender);

    const tdBorn = document.createElement('td');

    tdBorn.textContent = person.born;
    row.appendChild(tdBorn);

    const tdDied = document.createElement('td');

    tdDied.textContent = person.died ?? '';
    row.appendChild(tdDied);

    const tdAge = document.createElement('td');

    tdAge.textContent = person.died
      ? person.died - person.born
      : currentYear - person.born;
    row.appendChild(tdAge);

    const tdCentury = document.createElement('td');

    tdCentury.textContent = person.died ? Math.ceil(person.died / 100) : '';
    row.appendChild(tdCentury);

    dashboardTable.appendChild(row);
  }
})();
