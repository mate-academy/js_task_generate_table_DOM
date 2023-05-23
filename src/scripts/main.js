'use strict';

const people = require('./lib/people');

const dashboardRef = document.querySelector('.dashboard');

function addData(arr) {
  for (const item of arr) {
    const count = 0;
    const newRow = dashboardRef.insertRow(count + 1);
    const { sex, born, died } = item;
    const gender = sex === 'm' ? 'Male' : 'Female';
    const age = died - born;
    const century = Math.ceil(died / 100);

    const rowHtml = `
      <td>${item.name}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    `;

    newRow.insertAdjacentHTML('beforeend', rowHtml);
  }
}

addData(people);
