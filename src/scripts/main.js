'use strict';
import people from './people.json';

const tableElement = document.querySelector('.dashboard');

for (const personToAdd of people) {
  const personAge = personToAdd.died - personToAdd.born;
  const century = Math.ceil(personToAdd.died / 100);
  const gender = personToAdd.sex === 'm' ? 'Male' : 'Female';

  const newTag = document.createElement('tr');
  const iterArr = [
    personToAdd.name,
    gender,
    personToAdd.born,
    personToAdd.died,
    personAge,
    century
  ];

  for (let iter of iterArr) {
    const tdElement = document.createElement('td');
    tdElement.textContent = iter;
    newTag.appendChild(tdElement); // добавляем td в tr
  }

  const target = tableElement.querySelector('tbody') || tableElement;
  target.appendChild(newTag); // добавляем tr в tbody или table
}

