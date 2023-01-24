'use strict';

const people = require('./lib/people');

const dash = document.querySelector('.dashboard');

people.map(a => createRow(a, dash));

function createRow(human, nodeHook) {
  const table = document.createElement('tr');

  const humanName = document.createElement('th');
  humanName.textContent = human.name;

  const humanSex = document.createElement('th');
  humanSex.textContent = human.sex === 'm' ? 'Male' : 'Female';

  const humanBorn = document.createElement('th');
  humanBorn.textContent = human.born;

  const humanDied = document.createElement('th');
  humanDied.textContent = human.died;

  const humanAge = document.createElement('th');
  humanAge.textContent = human.died - human.born;

  const humanCentury = document.createElement('th');
  humanCentury.textContent = Math.ceil(human.died / 100);

  table.append(humanName, humanSex, humanBorn, humanDied, humanAge, humanCentury);

  nodeHook.append(table);

}

