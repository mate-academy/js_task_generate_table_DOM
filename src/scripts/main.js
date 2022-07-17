'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

// write your code here
const core = document.querySelector('.dashboard');
let lastStyleLeft = 'border-bottom-left-radius: unset;';
let lastStyleRight = 'border-bottom-right-radius: unset;';

for (const section of people) {
  const colorBackground = people.indexOf(section) % 2 === 0
    ? 'white'
    : '#f5f5f5';

  const sexPeople = section.sex === 'm' ? 'Male' : 'Female';

  if (people.indexOf(section) === Object.keys(people).length - 1) {
    lastStyleLeft = 'border-bottom-left-radius: 10px;';
    lastStyleRight = 'border-bottom-right-radius: 10px;';
  }

  core.insertAdjacentHTML('beforeend', `
    <tr 
    style="
    background-color: ${colorBackground}; 
    color: #898989; 
    border-bottom-right-radius: unset;
    ">
    <td style="${lastStyleLeft}">
    ${section.name}</td>
    <td>${sexPeople}</td>
    <td>${section.born}</td>
    <td>${section.died}</td>
    <td>${section.died - section.born}</td>
    <td style="${lastStyleRight}">
    ${Math.ceil(section.died / 100)}</td>
    </tr>
  `);
}
