'use strict';

const people = require('./lib/people').sort((a, b) => (a.born - b.died));

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tr');

for (let i = 0; i < people.length; i++) {
  const us = people[i].name;
  const sex = people[i].sex;
  const born = people[i].born;
  const died = people[i].died;

  table.insertAdjacentHTML(
    'afterend',
    `<tr>
      <th>${us}</th>
      <th>${sex.toUpperCase()}</th>
      <th>${born}</th>
      <th>${died}</th>
      <th>${died - born}</th>
      <th>${Math.ceil(died / 100)}</th>
    </tr>`
  );
}
