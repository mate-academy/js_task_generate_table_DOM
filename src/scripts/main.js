'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function sex(gender) {
  return gender === 'm' ? 'Male' : 'Female';
}

for (const human of people) {
  const line = document.createElement('tr');

  line.innerHTML = `
    <td>${human.name}</td>
    <td>${sex(human.sex)}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${human.died - human.born}</td>
    <td>${Math.ceil(human.died / 100)}</td>
  `;

  table.append(line);
}
