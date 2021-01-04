'use strict';

const people = require('./lib/people');

const tr = document.querySelector('tr');

for (const person of people) {
  const sex = person.sex === 'm' ? 'male' : 'female';

  tr.insertAdjacentHTML('afterend',
    `
      <tr>
        <th>${person.name}</th>
        <th>${sex[0].toUpperCase() + sex.slice(1)}</th>
        <th>${person.born}</th>
        <th>${person.died}</th>
        <th>${person.died - person.born}</th>
        <th>${Math.ceil(person.died / 100)}</th>
      </tr>
    `
  );
}
