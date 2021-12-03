'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  const tdN = document.createElement('td');

  tdN.innerHTML = person.name;
  tr.appendChild(tdN);

  const tdG = document.createElement('td');

  tdG.innerHTML = person.sex;
  tr.appendChild(tdG);

  const tdB = document.createElement('td');

  tdB.innerHTML = person.born;
  tr.appendChild(tdB);

  const tdD = document.createElement('td');

  tdD.innerText = person.died;
  tr.appendChild(tdD);

  const tdAge = document.createElement('td');

  tdAge.innerText = person.died;
  tr.appendChild(tdAge);

  const tdC = document.createElement('td');

  tdC.innerText = Math.ceil(person.died / 100);
  tr.appendChild(tdC);

  table.appendChild(tr);
}
