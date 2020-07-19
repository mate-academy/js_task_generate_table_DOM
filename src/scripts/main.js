'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.map(person => {
  const line = document.createElement('tr');

  const name = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  name.innerHTML = person.name;
  gender.innerHTML = person.sex === 'm' ? 'Male' : 'Female';
  born.innerHTML = person.born;
  died.innerHTML = person.died;
  age.innerHTML = person.died - person.born;
  century.innerHTML = Math.ceil(person.died / 100);

  line.append(name, gender, born, died, age, century);
  table.append(line);
});
