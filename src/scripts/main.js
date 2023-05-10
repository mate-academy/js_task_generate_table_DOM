'use strict';

const people = require('./lib/people');

const tableBodyEl = document.querySelector('.dashboard tbody');

for (const person of people) {

    tableBodyEl.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${person.name}</td>
            <td>${getGender(person.sex)}</td>
            <td>${person.born}</td>
            <td>${person.died}</td>
            <td>${person.died - person.born}</td>
            <td>${getCentury(person.died)}</td>
        </tr>
    `);

}

function getGender(sex) {
  return sex === 'f' ? 'Female' : 'Male';
}

function getCentury(died) {
  return Math.ceil(died / 100);
}
