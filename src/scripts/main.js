import people from './lib/people.json';

function createTableRow(person) {
  const row = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  const genderCell = document.createElement('td');

  genderCell.textContent = person.gender;
  row.appendChild(genderCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  row.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  row.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = age;
  row.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = century;
  row.appendChild(centuryCell);

  return row;
}

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = createTableRow(person);

  table.appendChild(row);
});
