'use strict';

import people from './lib/people.json';

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');

people.forEach((person) => {
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  const genderTd = document.createElement('td');
  const bornTd = document.createElement('td');
  const diedTd = document.createElement('td');
  const ageTd = document.createElement('td');
  const centuryTd = document.createElement('td');

  nameTd.textContent = person.name;
  genderTd.textContent = person.sex === 'm' ? 'Male' : 'Female';
  bornTd.textContent = person.born;
  diedTd.textContent = person.died;
  ageTd.textContent = person.died - person.born;
  centuryTd.textContent = Math.ceil(person.died / 100);

  tr.append(nameTd, genderTd, bornTd, diedTd, ageTd, centuryTd);

  dashboard.append(tr);
});
