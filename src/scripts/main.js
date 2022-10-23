'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');
  const personName = person.name;
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const born = person.born;
  const died = person.died;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tr.insertAdjacentHTML('beforeend', `
    <td>
      ${personName}
    </td>  
    <td>
      ${gender}
    </td>  
    <td>
      ${born}  
    </td>
    <td>
      ${died}
    </td>
    <td>
      ${age}
    <td>
    ${century}
    </td>
  `);

  table.append(tr);
});
