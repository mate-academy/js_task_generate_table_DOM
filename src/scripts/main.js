'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

const peopleForTable = people.map(person => {
  const century = Math.ceil(person.died / 100);
  const age = person.died - person.born;
  const sex = person.sex === 'm' ? 'Male' : 'Female';

  return ({
    name: person.name,
    sex: sex,
    born: person.born,
    died: person.died,
    age: age,
    century: century,
  });
});

peopleForTable.forEach(person => {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.age}</td>
      <td>${person.century}</td>
    </tr>
  `);
});
