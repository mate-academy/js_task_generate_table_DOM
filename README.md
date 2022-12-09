1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://yevhenii-stanchenko.github.io/js_task_generate_table_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Generate dashboard from JSON

This task requires knowledge of how HTML table works. You can learn it here:
 - [MDN HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

Okay, now we know what is a table, and can do some magic.
In `main.js`, you already have imported file `people.json`. Variable `people` contains an array of people, you can check it by using `console.log`.
Your task today is to convert this array to table rows.

Your layout for start: 

![Preview](./src/images/preview.png)

From the preview, you can see that table has 6 headers, but our data does not contain age and century. Yes, you need to calculate them by yourself.
 
##### Steps to do this challenge:
1) For each person from `people` array create table row with 6 table cells (name, gender, born, died, age, century)
2) Find a table with class `dashboard` in the document.
3) Append created row to table.
4) Done.

Hints:
- Age is `person.died - person.born`
- Century:divide year of person's death by 100 `Math.ceil(person.died / 100)`

Do not change styles or HTML layout in this task. Change only `main.js` file.

Expected result:


Хорошо, теперь мы знаем, что такое таблица, и можем поколдовать.
В `main.js` у вас уже есть импортированный файл `people.json`. Переменная `people` содержит массив людей, вы можете проверить это с помощью `console.log`.
Ваша задача сегодня — преобразовать этот массив в строки таблицы.

Ваш макет для начала:

![Предварительный просмотр](./src/images/preview.png)

Из превью видно, что таблица имеет 6 заголовков, но в наших данных нет возраста и века. Да, вам нужно рассчитать их самостоятельно.
 
##### Шаги для выполнения этого задания:
1) Для каждого человека из массива «люди» создайте строку таблицы с 6 ячейками таблицы (имя, пол, родился, умер, возраст, век)
2) Найдите в документе таблицу с классом `dashboard`.
3) Добавить созданную строку в таблицу.
4) Готово.

Подсказки:
- Возраст равен "человек. умер - человек. родился"
- Век: разделить год смерти человека на 100 `Math.ceil(person.died / 100)`

Не изменяйте стили или разметку HTML в этой задаче. Измените только файл `main.js`.

Ожидаемый результат:

![Preview](./src/images/reference.png)
