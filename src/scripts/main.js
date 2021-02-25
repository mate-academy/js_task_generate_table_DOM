'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function updateTable(element, parameters) {
  parameters.forEach(({ name: firstName, sex, born, died }) => {
    element.children[0].insertAdjacentHTML('beforeend', `
    <tr>
      <td>${firstName}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    </tr>`
    );
  });
}

updateTable(table, people);
