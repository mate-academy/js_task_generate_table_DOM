'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const peopleNew = people.map(person => {
  return {
    name: person.name,
    gender: person.sex === 'm' ? 'Male' : 'Female',
    born: person.born,
    died: person.died,
    age: person.died - person.born,
    century: Math.ceil(person.died / 100),
  };
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
