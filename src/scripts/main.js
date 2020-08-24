'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const tableRow = document.querySelector('tr');

const personTableRow = personObj => {
  const personSex = (personObj.sex === 'm') ? 'Male' : 'Female';
  const personAge = personObj.died - personObj.born;
  const century = Math.ceil(personObj.died / 100);

  const person = tableRow.insertAdjacentHTML('afterend', `
    <tr>
      <td>${personObj.name}</td>
      <td>${personSex}</td>
      <td>${personObj.born}</td>
      <td>${personObj.died}</td>
      <td>${personAge}</td>
      <td>${century}</td>
  </tr>
  `);

  return person;
};

for (const person of people) {
  personTableRow(person);
}
