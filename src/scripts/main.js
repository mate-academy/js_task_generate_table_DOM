'use strict';
import people from '../data/people.json';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.dashboard');
  if (!table) return;

  people.forEach(person => {
    const row = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = person.name;
    row.appendChild(nameTd);

    const genderTd = document.createElement('td');
    genderTd.textContent = person.sex;
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

    table.appendChild(row);
  });
});





 
