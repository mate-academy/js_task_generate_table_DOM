'use strict';

// write your code here
import people from './people.json';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  row.innerHTML = `
     <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;
  table.appendChild(row);
});
