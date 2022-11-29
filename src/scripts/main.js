'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const peopleDetails = people.map(human => ({
  Name: human.name,
  Gender: human.sex === 'f' ? 'Female' : 'Male',
  Born: human.born,
  Died: human.died,
  Age: human.died - human.born,
  Century: Math.ceil(human.died / 100),
}));

const table = document.querySelector('.dashboard');

peopleDetails.forEach(person => {
  const row = document.createElement('tr');

  Object.values(person).forEach(text => {
    const cell = document.createElement('td');
    const textNode = document.createTextNode(text);

    cell.appendChild(textNode);
    row.appendChild(cell);
  });

  table.appendChild(row);
});
