'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

let table = document.querySelector(".dashboard");


let rows = people.map(function(person) {

  let row = document.createElement("tr");
  

  let nameCell = document.createElement("td");
  nameCell.textContent = person.name;
  
  let genderCell = document.createElement("td");
  if (person.sex === "m") {
    genderCell.textContent = "Male";
  } else {
    genderCell.textContent = "Female";
  }
  
  let bornCell = document.createElement("td");
  bornCell.textContent = person.born;
  
  let diedCell = document.createElement("td");
  diedCell.textContent = person.died;
  
  let ageCell = document.createElement("td");
  ageCell.textContent = person.died - person.born;
  
  let centuryCell = document.createElement("td");
  centuryCell.textContent = Math.ceil(person.died / 100);
  
 
  row.appendChild(nameCell);
  row.appendChild(genderCell);
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(ageCell);
  row.appendChild(centuryCell);

  return row;
});

rows.forEach(function(row) {
  table.appendChild(row);
});
