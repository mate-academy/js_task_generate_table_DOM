'use strict';

const people = require('./lib/people');

const fragment = document.createDocumentFragment();

people.forEach(person => {
  const tr = document.createElement('tr');

  createElement(tr, person.name);
  createElement(tr, person.sex);
  createElement(tr, person.born);
  createElement(tr, person.died);
  createElement(tr, person.died - person.born);
  createElement(tr, Math.ceil(person.died / 100));

  fragment.append(tr);
});

document.querySelector('.dashboard').append(fragment);

function createElement(row, data) {
  const ceil = document.createElement('td');

  ceil.textContent = data;
  row.append(ceil);
}
