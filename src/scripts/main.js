'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard').lastChild;

function genereteTable(data) {
  data.forEach(element => {
    table.innerHTML += `
    <tr>
      <td>${element.name}</td>
      <td>${element.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${element.born}</td>
      <td>${element.died}</td>
      <td>${element.died - element.born}</td>
      <td>${Math.ceil(element.died / 100)}</td>
    </tr>
    `;
  });
}

genereteTable(people);
