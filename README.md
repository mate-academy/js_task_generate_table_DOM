### Task: Generate dashboard from JSON

This task requires knowledge of how HTML table works. You can learn it here:
 - [MDN HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

Okay, now we know what is table, and can do some magic.
In `main.js`, you already has imported file `people.json`. Variable `people` contains an array of people, you can check it by `console.log`.
Your task today is convert this array to table rows.

You layout for start: 

![Preview](./src/images/preview.png)

From preview you can see that table have 6 headers, but our data does not contain age and century. Yes, you need to get it by yourself.
 
##### Steps to do this challenge:
1) For each person from `people` array create table row with 6 table cells (name, gender, born, died, age, century)
2) Find table with class `dashboard` in document.
3) Append created row to table.
4) Done.

Hints:
- Age is `person.died - person.born`
- Century:divide year of person's death by 100 `Math.ceil(person.died / 100)`

You no need to change styles or HTML layout in this task. Change only `main.js` file.

Expected result:

![Preview](./src/images/reference.png)
