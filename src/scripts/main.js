'use strict';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = document.createElement('tr');

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const cells = [
    person.name,
    person.sex,
    person.born,
    person.died,
    age,
    century,
  ];

  cells.forEach((value) => {
    const td = document.createElement('td');
    td.textContent = value;
    row.appendChild(td);
  });

  table.appendChild(row);
});
