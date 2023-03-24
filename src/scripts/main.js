'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const peopleNew = people.map(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    person.gender = 'Male';
  }

  if (person.sex === 'f') {
    person.gender = 'Female';
  }

  delete person.fatherName;
  delete person.motherName;
  delete person.sex;
  delete person.slug;

  return person;
});

for (const item of peopleNew) {
  const tRow = document.createElement('tr');
  const tBody = document.querySelector('tbody');

  tBody.append(tRow);

  const tHead = document.querySelectorAll('th');

  for (const head of tHead) {
    for (const key in item) {
      if (key === head.textContent.toLowerCase()) {
        const tData = document.createElement('td');

        tRow.append(tData);

        tData.textContent = item[key];
      }
    }
  }
}
