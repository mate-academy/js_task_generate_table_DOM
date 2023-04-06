'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const fullName = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  fullName.innerHTML = person.name;
  gender.innerHTML = person.sex === 'm' ? 'Male' : 'Female';
  born.innerHTML = person.born;
  died.innerHTML = person.died;
  age.innerHTML = person.died - person.born;
  century.innerHTML = Math.ceil(person.died / 100);

  row.append(fullName, gender, born, died, age, century);
  dashboard.append(row);
});
