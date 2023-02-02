'use strict';

const people = require('./lib/people');
const header = document.querySelector('tr');

for (const person of people) {
  const age = parseFloat(person.died) - parseFloat(person.born);
  const century = Math.ceil(parseFloat(person.died) / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  header.insertAdjacentHTML('afterend',
    `<tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`
  );
}
