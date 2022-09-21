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

  personName.innerText = person.name;

  switch (person.sex) {
    case 'm': 
      personGender.innerText = 'Male';
    break;

    case 'f': 
      personGender.innerText = 'Female';
    break;
  }

  personBorn.innerText = person.born;
  personDied.innerText = person.died;
  personAge.innerText = person.died - person.born;
  personCentury.innerText = Math.ceil(person.died / 100);

  tr.append(
    personName,
    personGender,
    personBorn,
    personDied,
    personAge,
    personCentury
  );

  dashboard.append(tr);
}
