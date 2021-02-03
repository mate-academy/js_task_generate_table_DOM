'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const innerText = (target, index) => {
  switch (index) {
    case 0 : {
      return target.name;
    }

    case 1 : {
      return (target.sex === 'm') ? 'Male' : 'Female';
    }

    case 2 : {
      return target.born;
    }

    case 3 : {
      return target.died;
    }

    case 4 : {
      return target.died - target.born;
    }

    case 5 : {
      return Math.ceil(target.died / 100);
    }
  }
};

for (const human of people) {
  const row = document.createElement('tr');

  for (let j = 0; j < 6; ++j) {
    const cell = document.createElement('td');

    cell.innerText = innerText(human, j);
    row.appendChild(cell);
  }

  table.appendChild(row);
}
