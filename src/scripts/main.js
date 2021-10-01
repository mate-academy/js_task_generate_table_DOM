'use strict';

const people = require('./lib/people');

const classTabel = document.getElementsByClassName('dashboard')[0].children[0];

for (const person of people) {
  const line = document.createElement('tr');

  const namePerson = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  namePerson.textContent = person.name;
  gender.textContent = (person.sex === 'm') ? 'Male' : 'Female';
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  classTabel.append(line);

  line.append(namePerson);
  line.append(gender);
  line.append(born);
  line.append(died);
  line.append(age);
  line.append(century);
};
