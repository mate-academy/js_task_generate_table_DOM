'use strict';

function makeDashboard(dashboard, people) {
  for (const person of people) {
    const gender = person.sex === 'm' ? 'Male' : 'Female';

    dashboard.tBodies[0].insertAdjacentHTML('beforeend', `
      <tr>
        <td>${person.name}</td>
        <td>${gender}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      </tr>
    `);
  }
}

const peopleData = require('./lib/people');
const table = document.querySelector('.dashboard');

makeDashboard(table, peopleData);
