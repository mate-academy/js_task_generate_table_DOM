'use strict';

const people = require('./lib/people');

const tr = document.querySelector('tr');
const table = document.querySelector('tbody');

for (const person of people) {
  const newTr = tr.cloneNode(true);

  newTr.children[0].innerText = person.name;
  newTr.children[1].innerText = person.sex;
  newTr.children[2].innerText = person.born;
  newTr.children[3].innerText = person.died;
  newTr.children[4].innerText = person.died - person.born;
  newTr.children[5].innerText = Math.ceil(person.died / 100);

  table.append(newTr);
}
