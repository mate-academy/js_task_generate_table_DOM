'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('tbody');

for (const person of people) {
  let { age, century, gender } = person;

  age = person.died - person.born;
  century = Math.ceil(person.died / 100);
  gender = person.sex === 'f' ? 'Female' : 'Male';

  table.insertAdjacentHTML('beforeend', `
  <tr>
      <td>
        ${person.name}
      </td>
      <td>
        ${gender}
      </td>
      <td>
        ${person.born}
      </td>
      <td>
        ${person.died}
      </td>
      <td>
        ${age}
      </td>
      <td>
        ${century}
      </td>
    </tr>
    `
  );
};
