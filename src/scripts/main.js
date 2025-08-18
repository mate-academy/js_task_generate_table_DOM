'use strict';

import people from './lib/people.json';

// write your code here
const table = document.querySelector('.dashboard');

function sortedPeople(humans) {
  for (const person of humans) {
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    person.age = age;
    person.century = century;
  }

  return people.sort((person1, person2) => person2.died - person1.died);
}

sortedPeople(people);

function createPeopleInfoRows(humans) {
  for (const human of humans) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');

    nameCell.textContent = human.name;

    const gender = document.createElement('td');

    gender.textContent = human.sex === 'm' ? 'Male' : 'Female';

    const born = document.createElement('td');

    born.textContent = human.born;

    const died = document.createElement('td');

    died.textContent = human.died;

    const age = document.createElement('td');

    age.textContent = human.age;

    const century = document.createElement('td');

    century.textContent = human.century;

    row.append(nameCell, gender, born, died, age, century);

    table.appendChild(row);
  }
}

createPeopleInfoRows(people);
