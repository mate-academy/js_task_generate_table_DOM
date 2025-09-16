'use strict';
import people from '../data/people.json';

const table = document.querySelector('.dashboard');

if (table) {
  const target = table.querySelector('tbody') || table;

  people.forEach((person) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdGender = document.createElement('td');
    const tdBorn = document.createElement('td');
    const tdDied = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdCentury = document.createElement('td');

    tdName.textContent = person.name;
    tdGender.textContent = person.sex === 'm' ? 'm ' : 'f';
    tdBorn.textContent = person.born;
    tdDied.textContent = person.died;
    tdAge.textContent = person.died - person.born;
    tdCentury.textContent = Math.ceil(person.died / 100);

    tr.append(tdName, tdGender, tdBorn, tdDied, tdAge, tdCentury);

    target.appendChild(tr);
  });
}
