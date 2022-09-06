'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const sex = (person.sex === 'f') ? 'Female' : 'Male';

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;
  table.append(tr);
}

// #region longVersion
// for (const person of people) {
//   const tr = document.createElement('tr');

//   table.append(tr);

//   const personName = document.createElement('th');
//   const personGender = document.createElement('th');
//   const personBorn = document.createElement('th');
//   const personDied = document.createElement('th');
//   const personAge = document.createElement('th');
//   const personCentury = document.createElement('th');

//   person.sex === 'm'
//     ? personGender.innerText = 'Male'
//     : personGender.innerText = 'Female';

//   personName.innerText = person.name;
//   personBorn.innerText = person.born;
//   personDied.innerText = person.died;
//   personAge.innerText = person.died - person.born;
//   personCentury.innerText = Math.ceil(person.died / 100);

//   tr.append(personName);
//   tr.append(personGender);
//   tr.append(personBorn);
//   tr.append(personDied);
//   tr.append(personAge);
//   tr.append(personCentury);
// }
// #endregion
