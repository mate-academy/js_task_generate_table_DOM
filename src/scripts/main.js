'use strict';
// import data from "/lib/people";

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table');

people.map((peopleObj) => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${peopleObj.name}</td>
    <td>${peopleObj.sex === 'm' ? 'male' : 'women'}</td>
    <td>${peopleObj.born}</td>
    <td>${peopleObj.died}</td>
    <td>${peopleObj.died - peopleObj.born}</td>
    <td>${Math.ceil(peopleObj.died / 100)}</td>
    `;

  table.append(tr);
});

// write your code here
