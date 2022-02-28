'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');

function sortList(data) {
  const dataArr = [...data];

  const convertToNumber = (stringValue) => {
    return +stringValue.dataset.salary.slice(1).split(',').join('');
  };

  dataArr.sort((prev, next) => convertToNumber(next) - convertToNumber(prev));

  list.append(...dataArr);
}

function getEmployees(data) {
  return [...data].map((employee) => ({
    name: employee.textContent,
    ...employee.dataset,
  }));
}

sortList(listElements);
getEmployees(listElements);
