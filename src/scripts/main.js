import people from './lib/people.json';

const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);

  const tableRow = document.createElement('tr');

  const cells = [personName, sex, born, died, age, century];

  cells.forEach((text) => {
    const td = document.createElement('td');

    td.innerText = text;
    tableRow.appendChild(td);
  });

  table.appendChild(tableRow);
});
