'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

/* for (const person of people) {
  table.firstElementChild.insertAdjacentHTML("beforeend",
    `<tr>
    <td>${person.name}</td>
    </tr>`
  );
}

/* for (const person of people) {
  const tableRow = document.createElement('tr');
  const tableData = document.createElement('td');

  tableData.textContent = person.born;

  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
}
document.createElement('td').textContent = '14';
table.appendChild()
*/
// eslint-disable-next-line no-debugger

/* for (const person of people) {
  const tableRow = document.createElement('tr');

  for (const data in person) {
    const tableData = document.createElement('td');

    tableData.innerText = person[data];

    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
}
*/
const dataArray = [];

for (const person of people) {
  const personData = {
    nameOfPerson: person.name,
    genderOfPerson: person.sex === 'm' ? 'male' : 'female',
    bornDate: person.born,
    diedDate: person.died,
    personAge: person.died - person.born,
    personCentury: Math.ceil(person.died / 100),
  };

  dataArray.push(personData);
}

for (const personData of dataArray) {
  const tableRow = document.createElement('tr');

  for (const data in personData) {
    const tableData = document.createElement('td');

    tableData.innerText = personData[data];

    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
}
