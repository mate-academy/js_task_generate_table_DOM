'use strict';

import people from './lib/people.json';

const formattedPeople = people.map((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  let gender = person.sex;

  if (person.sex === 'm') {
    gender = 'Male';
  } else if (person.sex === 'f') {
    gender = 'Female';
  }

  return {
    ...person,
    age,
    century,
    gender,
  };
});

const table = document.querySelector('.dashboard');

formattedPeople.forEach((person) => {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSex = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.innerHTML = person.name;
  tdSex.innerHTML = person.gender;
  tdBorn.innerHTML = person.born;
  tdDied.innerHTML = person.died;
  tdAge.innerHTML = person.age;
  tdCentury.innerHTML = person.century;

  tr.append(tdName);
  tr.append(tdSex);
  tr.append(tdBorn);
  tr.append(tdDied);
  tr.append(tdAge);
  tr.append(tdCentury);

  table.append(tr);
});
