'use strict';

const people = require('./lib/people');

const dash = document.querySelector('.dashboard');

function addData(arr) {
  for (const item of arr) {
    const count = 0;
    const newRow = dash.insertRow(count + 1);
    const { sex, born, died } = item;
    const gender = sex === 'm' ? 'Male' : 'Female';
    const age = died - born;
    const century = Math.ceil(died / 100);

    newRow.insertAdjacentHTML('beforeend', `<td>${item.name}</td>`);
    newRow.insertAdjacentHTML('beforeend', `<td>${gender}</td>`);
    newRow.insertAdjacentHTML('beforeend', `<td>${born}</td>`);
    newRow.insertAdjacentHTML('beforeend', `<td>${died}</td>`);
    newRow.insertAdjacentHTML('beforeend', `<td>${age}</td>`);
    newRow.insertAdjacentHTML('beforeend', `<td>${century}</td>`);
  }
}

addData(people);
