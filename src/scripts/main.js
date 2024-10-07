'use strict';

import people from './lib/people.json';

const dashboard = document.querySelector('.dashboard tbody');

const firstLetterToUpperCase = (str = '') =>
  str[0].toUpperCase() + str.slice(1);

const changedPeopleData = people.map((person) => {
  const { sex, born, died } = person;

  const age = died - born;
  const centry = Math.ceil(died / 100);
  const gender = sex === 'm' ? 'male' : 'female';

  return {
    name: person.name,
    gender: firstLetterToUpperCase(gender),
    born,
    died,
    age,
    centry,
  };
});

changedPeopleData.forEach((person) => {
  const tr = document.createElement('tr');
  const { gender, born, died, age, centry } = person;

  const template = `
                    <td>${person.name}</td>
                    <td>${gender}</td>
                    <td>${born}</td>
                    <td>${died}</td>
                    <td>${age}</td>
                    <td>${centry}</td>
`;

  tr.innerHTML = template;

  dashboard.append(tr);
});
