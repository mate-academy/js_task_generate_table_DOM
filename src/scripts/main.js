/* eslint-disable quotes */
"use strict";

const people = require("./lib/people");

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector(".dashboard");
const tbody = table.children[0];

tbody.insertAdjacentHTML(
  "beforeend",
  `${people
    .map((person) => {
      const age = person.died - person.born;
      const century = Math.ceil(person.died / 100);

      return `
      <tr>
        <td>${person.name}</td>
        <td>${person.sex}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${age}</td>
        <td>${century}</td>
      </tr>
      `;
    })
    .join("")}`
);
