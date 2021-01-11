'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

people.forEach(element => {
  if (element.sex === 'f') {
    element.sex = 'Female';
  } else {
    element.sex = 'Male';
  }
});

for (const human of people) {
  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${human.name}</td>
    <td>${human.sex}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${human.died - human.born}</td>
    <td>${Math.ceil(human.died / 100)}</td>
  </tr>
`);
}
