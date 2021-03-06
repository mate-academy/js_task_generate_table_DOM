'use strict';

const people = require('./lib/people');

const getPeople = document.querySelector('.dashboard tbody');

function generateTable(peopleList) {
  for (let i = 0; i < peopleList.length; i++) {
    const row = document.createElement('tr');

    row.innerHTML = `
    <tr>
      <td>${peopleList[i].name}</td>
      <td>${peopleList[i].sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${peopleList[i].born}</td>
      <td>${peopleList[i].died}</td>
      <td>${peopleList[i].died - peopleList[i].born}</td>
      <td>${Math.ceil(peopleList[i].died / 100)}</td>
    </tr>
    `;
    getPeople.append(row);
  };
}

generateTable(people);
