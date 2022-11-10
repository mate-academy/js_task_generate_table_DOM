'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

people.forEach(human => {
  let sex = 'Female';

  if (human.sex === 'm') {
    sex = 'Male';
  }

  table.insertAdjacentHTML('beforeend',
    `<tr><td>${human.name}</td><td>${sex}</td>
<td>${human.born}</td><td>${human.died}</td><td>${human.died - human.born}</td>
<td>${Math.ceil(human.died / 100)}</td></tr>`);
});
