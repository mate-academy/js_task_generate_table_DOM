'use strict';

const table = document.querySelector('table');
const th = table.tHead.rows[0].cells[1];
const targetTh = table.tHead.rows[0].cells[4];
const newTh = table.tHead.rows[0].insertCell(5);

newTh.outerHTML = targetTh.outerHTML;
targetTh.innerHTML = th.innerHTML;

const tf = table.tFoot.rows[0].cells[1];
const targetTf = table.tFoot.rows[0].cells[4];
const newTf = table.tFoot.rows[0].insertCell(5);

newTf.outerHTML = targetTf.outerHTML;
targetTf.innerHTML = tf.innerHTML;

for (let row = 0; row < table.tBodies[0].rows.length; row++) {
  const cell = table.tBodies[0].rows[row].cells[1];
  const targetCell = table.tBodies[0].rows[row].cells[4];
  const newCell = table.tBodies[0].rows[row].insertCell(5);

  newCell.innerHTML = targetCell.innerHTML;
  targetCell.innerHTML = cell.innerHTML;
}

