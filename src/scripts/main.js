'use strict';

const people = require('./lib/people');
const arrPeople = JSON.parse(people);

// eslint-disable-next-line no-console
const tableElement = document.querySelector('.dashboard');
for(let i = 1 ; i < arrPeople.length; i++){
    const newRow = tableElement.insertRow(i);
    for(let j = 0; j < 6; j++ ){
        const person = arrPeople[i-1];
        const newCell = newRow.insertCell(j);
        let strTextCell = '';

        switch (j) {
            case 0:
                strTextCell = person.name;
                break;
            case 1:
                const sex = person.sex;
                if(sex === 'm') {
                    strTextCell = 'Male';
                } else strTextCell = 'Female';

                break;
            case 2:
                strTextCell =person.born;
                break;
            case 3:
                strTextCell = person.died;
                break;
            case 4:
                const age = Number(person.died)- Number(person.born);
                strTextCell = age;
                break;
            case 5:
               const century =  Math.ceil(Number(person.died) / 100);
               strTextCell = century;
               break;
        }
        let newText = document.createTextNode(strTextCell);
        newCell.appendChild(newText);
    }
}

