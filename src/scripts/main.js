'use strict';

const people = require('./lib/people');

const newPeople = people.map(person => ({ ...person }));

newPeople.map(person => {
  delete person.fatherName;
  delete person.motherName;
  delete person.slug;
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    person.sex = 'Male';
  }

  if (person.sex === 'f') {
    person.sex = 'Female';
  }
});

for (const person of newPeople) {
  const tbody = document.querySelector('tbody');
  const tr = document.querySelector('tr');
  const trClone = tr.cloneNode(true);
  const th = trClone.querySelectorAll('th');

  th[0].innerText = person.name;
  th[1].innerText = person.sex;
  th[2].innerText = person.born;
  th[3].innerText = person.died;
  th[4].innerText = person.age;
  th[5].innerText = person.century;

  tbody.append(trClone);
}
