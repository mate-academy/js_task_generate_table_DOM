'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const tableRow = document.querySelector('.dashboard').firstElementChild;

people
  .map((person) => {
    tableRow.insertAdjacentHTML(
      'beforeend',
      `<tr> 
        <td>${person.name} </td>
        <td>${person.sex === 'm' ? 'Male' : 'Female'} </td>
        <td>${person.born} </td>
        <td>${person.died} </td>
        <td>${person.died - person.born} </td>
        <td>${Math.ceil(person.died / 100)} </td>
      </tr>`
    );
  });
