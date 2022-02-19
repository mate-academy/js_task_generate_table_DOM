'use strict';

const people = require('./lib/people');

/* const people = [
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
]; */

const myTable = document.querySelector('.dashboard');

const tableRow = document.createElement('tr');

for (const person of people) {
  tableRow.insertAdjacentHTML('beforeend', `
    <td> ${person.name} </td>
    <td> ${person.sex} </td>
    <td> ${person.born} </td>
    <td> ${person.died} </td>
    <td> ${person.died - person.born} </td>
    <td> ${Math.ceil(person.died / 100)} </td>
    `
  );

  myTable.append(tableRow);
}
