'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const human of people) {
  const tr = document.createElement('tr');
  const sexRes = human.sex === 'm' ? 'Male' : 'Female';

  const age = human.died - human.born;
  const century = Math.ceil(human.died / 100);

  tr.insertAdjacentHTML('beforeend', `
    <td>${human.name}</td>
    <td>${sexRes}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  dashboard.append(tr);
}
