'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('.dashboard');

// write your code here
function fillInTable(content) {
  for (const person of content) {
    const html
      = '<tr><td>' + person.name + '</td><td>'
      + person.sex + '</td><td>'
      + person.died + '</td><td>'
      + person.born + '</td><td>'
      + (person.died - person.born) + '</td><td>'
      + (Math.ceil(person.died / 100)) + '</td></tr>';

    table.append(html);
  }
}

fillInTable(people);
