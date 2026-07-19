'use strict';
import people from '../people.json';

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const personInfo = document.createElement('tr');

  personInfo.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  document.querySelector('.dashboard').appendChild(personInfo);
});
// write your code here
