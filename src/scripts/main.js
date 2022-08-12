'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableElement = document.querySelector('.dashboard').firstElementChild;

people.map(human => tableElement.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${human.name}</td>
    <td>${getGender(human.sex)}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${getAge(human.born, human.died)}</td>
    <td>${century(human.died)}</td>
  </tr>
  `)
);

function getGender(sex) {
  return sex === 'm' ? 'Male' : 'Female';
};

function getAge(born, died) {
  return died - born;
};

function century(died) {
  return Math.ceil(died / 100);
};
