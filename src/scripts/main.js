'use strict';
import people from './lib/people.json';

// eslint-disable-next-line no-console
const bigTable = document.querySelector('.dashboard');
const table = bigTable.querySelector('tbody') || bigTable;

function addCells(person, tableElem) {
  const tr = tableElem.appendChild(document.createElement('tr'));
  const nameTd = document.createElement('td');
  const sexTd = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const lived = document.createElement('td');
  const century = document.createElement('td');

  nameTd.textContent = person.name;
  sexTd.textContent = person.sex;
  born.textContent = person.born;
  died.textContent = person.died;
  lived.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  tr.appendChild(nameTd);
  tr.appendChild(sexTd);
  tr.appendChild(born);
  tr.appendChild(died);
  tr.appendChild(lived);
  tr.appendChild(century);
}

for (const personFromList of people) {
  addCells(personFromList, table);
}
