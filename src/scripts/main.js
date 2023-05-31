'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

for (const obj of people) {
  const dataRow = document.createElement('tr');

  const dataCella = document.createElement('td');

  dataCella.textContent = obj.name;

  const dataCellb = document.createElement('td');

  dataCellb.textContent = gender(obj.sex);

  const dataCellc = document.createElement('td');

  dataCellc.textContent = obj.born;

  const dataCelld = document.createElement('td');

  dataCelld.textContent = obj.died;

  const dataCelle = document.createElement('td');

  dataCelle.textContent = obj.died - obj.born;

  const dataCellf = document.createElement('td');

  dataCellf.textContent = Math.ceil(obj.born / 100);

  const box = document.querySelector('tr').parentNode;

  box.append(dataRow);
  dataRow.appendChild(dataCella);
  dataRow.appendChild(dataCellb);
  dataRow.appendChild(dataCellc);
  dataRow.appendChild(dataCelld);
  dataRow.appendChild(dataCelle);
  dataRow.appendChild(dataCellf);
}

function gender(sex) {
  let x = '';

  if (sex === 'm') {
    x = sex.replace('m', 'male');
  }

  if (sex === 'f') {
    x = sex.replace('f', 'female');
  }

  return x;
}
