'use strict';

const people = require('./lib/people');

people.map(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
});

const table = document.querySelector('table').children[0];

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${person.name}</td>
            <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
            <td>${person.born}</td>
            <td>${person.died}</td>
            <td>${person.age}</td>
            <td>${person.century}</td>
        </tr>`
  );
};
