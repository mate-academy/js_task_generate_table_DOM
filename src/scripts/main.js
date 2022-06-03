'use strict';

const people = require('./lib/people');
const rootEl = document.querySelector('table');

for (const objPeople of people) {
  const list = document.createElement('tr');

  const age = objPeople.died - objPeople.born;
  const century = objPeople.slug.slice(-4, -2);

  list.innerHTML = `
    <td>${objPeople.name}</td>
    <td>${objPeople.sex}</td>
    <td>${objPeople.born}</td>
    <td>${objPeople.died}</td>
    <td>${age}</td>
    <td>${century}</td>`;
  rootEl.append(list);
}
