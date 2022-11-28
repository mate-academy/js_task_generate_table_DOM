'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const ppl = people.map(pl => ({
  Name: pl.name,
  Gender: pl.sex === 'f' ? 'Female' : 'Male',
  Born: pl.born,
  Died: pl.died,
  Age: pl.died - pl.born,
  Century: Math.ceil(pl.died / 100),
}));

const table = document.querySelector('.dashboard');

ppl.forEach(person => {
  const row = document.createElement('tr');

  Object.values(person).forEach(text => {
    const cell = document.createElement('td');
    const textNode = document.createTextNode(text);

    cell.appendChild(textNode);
    row.appendChild(cell);
  });

  table.appendChild(row);
});
