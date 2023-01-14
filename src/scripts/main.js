'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;
  const row = document.createElement('tr');
  const name_ = document.createElement('td');
  const sex_ = document.createElement('td');
  const born_ = document.createElement('td');
  const died_ = document.createElement('td');
  const age_ = document.createElement('td');
  const century_ = document.createElement('td');

  name_.textContent = name;
  born_.textContent = born;
  died_.textContent = died;
  age_.textContent = died - born;
  century_.textContent = Math.ceil(died / 100);

  sex === 'f' ? sex_.textContent = 'Female' : sex_.textContent = 'Male';

  row.append(name_);
  row.append(sex_);
  row.append(born_);
  row.append(died_);
  row.append(age_);
  row.append(century_);
  dashboard.append(row);
}
