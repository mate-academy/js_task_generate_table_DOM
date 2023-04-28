'use strict';

const people = require('./lib/people');
const tabledata = [];

class Person {
  constructor(params) {
    this.name = params.name;
    this.born = params.born;
    this.died = params.died;
    this.sex = params.sex;
  }

  get gender() {
    return this.sex === 'm' ? 'male' : 'female';
  }
  get age() {
    return this.died - this.born;
  }
  get century() {
    return Math.ceil(this.died / 100);
  }
}

const setData = (crowd) => {
  for (const per of crowd) {
    tabledata.push(new Person(per));
  }
};

const layoutTable = (database) => {
  const table = document.querySelector('.dashboard');

  for (const item of database) {
    table.insertAdjacentHTML('beforeend', `
       <tr>
        <td>${item.name}</td>
        <td>${item.gender}</td>
        <td>${item.born}</td>
        <td>${item.died}</td>
        <td>${item.age}</td>
        <td>${item.century}</td>
      </tr>
  `);
  }
};

setData(people);
layoutTable(tabledata);
