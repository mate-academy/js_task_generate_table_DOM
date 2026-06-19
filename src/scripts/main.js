'use strict';

import people from './lib/people.json';

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const nameTd = document.createElement('td');

  nameTd.textContent = person.name;
  row.appendChild(nameTd);

  const genderTd = document.createElement('td');

  genderTd.textContent = person.sex === 'm' ? 'Male' : 'Female';
  row.appendChild(genderTd);

  const bornTd = document.createElement('td');

  bornTd.textContent = person.born;
  row.appendChild(bornTd);

  const diedTd = document.createElement('td');

  diedTd.textContent = person.died;
  row.appendChild(diedTd);

  const ageTd = document.createElement('td');

  ageTd.textContent = person.died - person.born;
  row.appendChild(ageTd);

  const centuryTd = document.createElement('td');

  centuryTd.textContent = Math.ceil(person.died / 100);
  row.appendChild(centuryTd);

  dashboard.appendChild(row);
}
