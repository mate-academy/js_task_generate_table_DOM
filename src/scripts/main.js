'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

document.addEventListener('DOMContentLoaded', () => {
  const peoplesTable = document.querySelector('.dashboard');

  people.forEach(person => {
    const man = createPersonInfoRow(person);

    peoplesTable.append(man);
  });

  function createPersonInfoRow(person) {
    // eslint-disable-next-line no-shadow
    const { name, sex: gender, born, died } = person;
    const century = Math.ceil(died / 100);
    const age = died - born;
    const rowPersonInfo
      = `
        <td>${name}</td>
        <td>${gender === 'm' ? 'Male' : 'Female'}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${age}</td>
        <td>${century}</td>
      `;
    const rowPerson = document.createElement('tr');

    rowPerson.innerHTML = rowPersonInfo;
    ;

    return rowPerson;
  }
});
