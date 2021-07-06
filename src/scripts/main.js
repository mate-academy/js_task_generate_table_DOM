'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.forEach(person => {
  const personName = person.name;
  const personGender = person.sex === 'm' ? 'Male' : 'Female';
  const personBorn = person.born;
  const personDied = person.died;
  const personAge = personDied - personBorn;
  const personCentury = Math.ceil(personDied / 100);

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <th>
        ${personName}
      </th>
      <th>
        ${personGender}
      </th>
      <th>
        ${personBorn}
      </th>
      <th>
        ${personDied}
      </th>
      <th>
        ${personAge}
      </th>
      <th>
        ${personCentury}
      </th>
    </tr>
  `);
});
