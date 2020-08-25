
'use strict';

const people = require('./lib/people');

function createTable(data) {
  const table = document.querySelector('.dashboard');

  for (let i = 0; i <= people.length; i++) {
    const row = `
    <tr>
    <td>${data[i].name}</td>
    <td>${data[i].sex}</td>
    <td>${data[i].born}</td>
    <td>${data[i].died}</td>
    <td>${data[i].died - data[i].born}</td>
    <td>${Math.ceil(data[i].died / 100)}</td>
    </tr>
   
    `;

    table.tBodies[0].innerHTML += row;
  }
}

createTable(people);
