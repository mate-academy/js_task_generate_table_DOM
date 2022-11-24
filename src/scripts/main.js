'use strict';

const people = require('./lib/people');
const arrPeople = JSON.parse(people);

// eslint-disable-next-line no-console
const tableElement = document.querySelector('.dashboard');

for (let i = 1; i < arrPeople.length; i++) {
  const person = arrPeople[i - 1];
  const trElement = document.createElement('tr');

  let strSex = '';

  if (person.sex === 'm') {
    strSex = 'Male';
  } else {
    strSex = 'Female';
  }

  const age = Number(person.died) - Number(person.born);
  const century = Math.ceil(Number(person.died) / 100);

  const strTextCell = `<td> ${person.name} </><td>
    ${strSex}  </><td>
    ${person.born}  </><td>
    ${person.died}  </><td>
    ${age.toString()} </><td>
    ${century}</>`;

  trElement.insertAdjacentHTML('beforeend', strTextCell);

  tableElement.insertAdjacentElement('beforeend', trElement);
}
