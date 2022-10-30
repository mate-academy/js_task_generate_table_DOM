/* eslint-disable no-shadow */
'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

const sexToString = (sex) => sex === 'm' ? 'Male' : 'Female';

const createRows = (peopleArr) => {
  for (const person of people) {
    const { name, sex, born, died } = person;

    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${name}</td>
        <td>${sexToString(sex)}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>
      </tr>
    `);
  }
};

createRows(people);
