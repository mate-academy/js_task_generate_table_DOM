'use strict';
import people from './lib/people.json';

const table = document.querySelector('table.dashboard');

if (table) {
  for (const person of people) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    const cell5 = document.createElement('td');
    const cell6 = document.createElement('td');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    if (person.sex === 'm') {
      cell2.textContent = 'Male';
    } else {
      cell2.textContent = 'Female';
    }

    cell1.textContent = person.name;
    cell3.textContent = person.born;
    cell4.textContent = person.died;
    cell5.textContent = age;
    cell6.textContent = century;

    row.append(cell1, cell2, cell3, cell4, cell5, cell6);
    table.append(row);
  }
}
