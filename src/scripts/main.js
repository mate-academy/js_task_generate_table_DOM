'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const line = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const perrsonInfo = [
    person.name, person.sex, person.born, person.died, age, century,
  ];

  for (let i = 0; i < 6; i++) {
    const newLine = document.createElement('td');

    if (perrsonInfo[i] === 'm') {
      newLine.textContent = `Male`;
    } else if (perrsonInfo[i] === 'f') {
      newLine.textContent = `Female`;
    } else {
      newLine.textContent = `${perrsonInfo[i]}`;
    }
    line.append(newLine);
  }
  table.append(line);
});
