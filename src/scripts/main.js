'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');

  personName.innerHTML = person.name;

  if (person.sex === 'm') {
    personGender.innerHTML = 'Male';
  }

  if (person.sex === 'f') {
    personGender.innerHTML = 'Female';
  }

  personBorn.innerHTML = person.born;
  personDied.innerHTML = person.died;
  personAge.innerHTML = person.died - person.born;
  personCentury.innerHTML = Math.ceil(person.died / 100);

  tr.append(
    personName, personGender, 
    personBorn, personDied, 
    personAge, personCentury
  );
  dashboard.append(tr);
}
