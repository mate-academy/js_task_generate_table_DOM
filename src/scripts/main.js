'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

function getPersonSex(person) {
  if (person === 'f') {
    return 'Female';
  }

  return 'Male';
}

[...people].map(elem =>
  table.insertAdjacentHTML('beforeend', `
<tr>
  <td>${elem.name}</td>
  <td>${getPersonSex(elem.sex)}</td>
  <td>${elem.born}</td>
  <td>${elem.died}</td>
  <td>${elem.died - elem.born}</td>
  <td>${Math.ceil(elem.died / 100)}</td>
</tr>
`
  ));
