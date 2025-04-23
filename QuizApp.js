const questions = [{
        category: "html",
        questions: [{
                question: "What does HTML stand for?",
                options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to define a paragraph?",
                options: ["<p>", "<para>", "<text>", "<paragraph>"],
                correctAnswer: 0,
            },
            {
                question: "Which tag is used to create a hyperlink in HTML?",
                options: ["<a>", "<link>", "<href>", "<url>"],
                correctAnswer: 0,
            },
            {
                question: "What is the correct HTML tag for inserting a line break?",
                options: ["<lb>", "<break>", "<br>", "<newline>"],
                correctAnswer: 2,
            },
            {
                question: "Which tag is used to insert an image in HTML?",
                options: ["<img>", "<image>", "<pic>", "<src>"],
                correctAnswer: 0,
            },
            {
                question: "What attribute is used to provide the path to an image in HTML?",
                options: ["href", "src", "path", "link"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML element is used for the largest heading?",
                options: ["<heading>", "<h6>", "<h1>", "<head>"],
                correctAnswer: 2,
            },
            {
                question: "Which tag is used to create a numbered list?",
                options: ["<ul>", "<ol>", "<li>", "<list>"],
                correctAnswer: 1,
            },
            {
                question: "Which tag is used to create a list item?",
                options: ["<item>", "<listitem>", "<li>", "<ul>"],
                correctAnswer: 2,
            },
            {
                question: "What is the purpose of the <title> tag?",
                options: ["To add a heading", "To set a page title", "To style the page", "To create a paragraph"],
                correctAnswer: 1,
            },
            {
                question: "Where does the <title> tag appear in an HTML document?",
                options: ["Inside the <body>", "Outside the HTML", "Inside the <head>", "At the end"],
                correctAnswer: 2,
            },
            {
                question: "Which HTML tag is used to define a table?",
                options: ["<tbl>", "<table>", "<tab>", "<data-table>"],
                correctAnswer: 1,
            },
            {
                question: "Which tag is used to define a table row?",
                options: ["<td>", "<tr>", "<row>", "<th>"],
                correctAnswer: 1,
            },
            {
                question: "Which tag defines a cell in a table row?",
                options: ["<tr>", "<cell>", "<td>", "<row>"],
                correctAnswer: 2,
            },
            {
                question: "How can you make text bold in HTML?",
                options: ["<b>", "<strong>", "<bold>", "Both <b> and <strong>"],
                correctAnswer: 3,
            },
            {
                question: "How do you create a checkbox in HTML?",
                options: ["<checkbox>", "<input type='checkbox'>", "<check>", "<box>"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to create a drop-down list?",
                options: ["<input type='list'>", "<select>", "<dropdown>", "<list>"],
                correctAnswer: 1,
            },
            {
                question: "Which HTML tag is used to group related form elements?",
                options: ["<group>", "<fieldset>", "<formgroup>", "<section>"],
                correctAnswer: 1,
            },
            {
                question: "Which tag is used to define a form in HTML?",
                options: ["<input>", "<form>", "<submit>", "<action>"],
                correctAnswer: 1,
            },
            {
                question: "Which attribute specifies the URL where a form is submitted?",
                options: ["action", "method", "submit", "url"],
                correctAnswer: 0,
            }
        ]
    },
    {
        category: "css",
        questions: [{
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
                correctAnswer: 2,
            },
            {
                question: "Which property is used to change the text color in CSS?",
                options: ["font-color", "text-color", "color", "background-color"],
                correctAnswer: 2,
            },
            {
                question: "Which CSS property controls the text size?",
                options: ["font-style", "text-size", "font-size", "text-style"],
                correctAnswer: 2,
            },
            {
                question: "How do you insert a comment in CSS?",
                options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "# this is a comment"],
                correctAnswer: 2,
            },
            {
                question: "Which is the correct CSS syntax?",
                options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
                correctAnswer: 2,
            },
            {
                question: "Which property is used to change the background color?",
                options: ["color", "bgcolor", "background-color", "background"],
                correctAnswer: 2,
            },
            {
                question: "How do you select an element with id 'demo'?",
                options: ["#demo", ".demo", "*demo", "demo"],
                correctAnswer: 0,
            },
            {
                question: "How do you select elements with class name 'test'?",
                options: [".test", "#test", "*test", "test"],
                correctAnswer: 0,
            },
            {
                question: "Which property is used to change the font of an element?",
                options: ["font-family", "font-style", "text-style", "font-type"],
                correctAnswer: 0,
            },
            {
                question: "How do you make all <p> elements bold?",
                options: ["p {text-weight: bold;}", "p {font-style: bold;}", "p {font-weight: bold;}", "p {text-style: bold;}"],
                correctAnswer: 2,
            },
            {
                question: "Which CSS property is used to change the spacing between letters?",
                options: ["letter-spacing", "word-spacing", "text-spacing", "character-spacing"],
                correctAnswer: 0,
            },
            {
                question: "Which property is used to align text to the center?",
                options: ["text-align: center;", "text: center;", "align: center;", "text-center: true;"],
                correctAnswer: 0,
            },
            {
                question: "What does the 'display' property control?",
                options: ["Font visibility", "Element position", "Element type behavior", "Color layout"],
                correctAnswer: 2,
            },
            {
                question: "Which value of position will cause an element to scroll with the page?",
                options: ["fixed", "relative", "static", "absolute"],
                correctAnswer: 2,
            },
            {
                question: "Which CSS unit is relative to the font-size of the parent element?",
                options: ["px", "pt", "em", "%"],
                correctAnswer: 2,
            },
            {
                question: "Which shorthand property sets margin for all four sides?",
                options: ["padding", "margin", "space", "gap"],
                correctAnswer: 1,
            },
            {
                question: "Which CSS property is used to make text italic?",
                options: ["font-style", "text-transform", "font-weight", "text-decoration"],
                correctAnswer: 0,
            },
            {
                question: "Which property hides an element without deleting it from the layout?",
                options: ["visibility: hidden;", "display: none;", "opacity: 0;", "hidden: true;"],
                correctAnswer: 0,
            },
            {
                question: "Which value of 'position' makes an element follow the page scroll?",
                options: ["absolute", "fixed", "sticky", "relative"],
                correctAnswer: 1,
            },
            {
                question: "How do you apply a style to all <h1> and <h2> elements?",
                options: ["h1, h2 {}", "h1 + h2 {}", "h1 h2 {}", "h1 & h2 {}"],
                correctAnswer: 0,
            }
        ]
    },
    {
        category: "javascript",
        questions: [{
                question: "Which company developed JavaScript?",
                options: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
                correctAnswer: 1,
            },
            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: ["//", "/*", "#", "<!--"],
                correctAnswer: 0,
            },
            {
                question: "How do you declare a variable in JavaScript?",
                options: ["var myVar;", "int myVar;", "declare myVar;", "v myVar;"],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is a JavaScript data type?",
                options: ["Number", "String", "Boolean", "All of the above"],
                correctAnswer: 3,
            },
            {
                question: "How do you write 'Hello World' in an alert box?",
                options: ["msg('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
                correctAnswer: 1,
            },
            {
                question: "What keyword is used to define a constant in JavaScript?",
                options: ["var", "let", "const", "constant"],
                correctAnswer: 2,
            },
            {
                question: "How do you create a function in JavaScript?",
                options: ["function = myFunc()", "function:myFunc()", "function myFunc()", "create myFunc()"],
                correctAnswer: 2,
            },
            {
                question: "How do you call a function named `myFunction`?",
                options: ["call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"],
                correctAnswer: 1,
            },
            {
                question: "How do you write an if statement in JavaScript?",
                options: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i = 5 then"],
                correctAnswer: 2,
            },
            {
                question: "Which operator is used to assign a value?",
                options: ["*", "=", "-", "+"],
                correctAnswer: 1,
            },
            {
                question: "Which method converts JSON to a JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
                correctAnswer: 0,
            },
            {
                question: "Which method is used to add an element at the end of an array?",
                options: [".add()", ".append()", ".push()", ".insert()"],
                correctAnswer: 2,
            },
            {
                question: "What is the output of `typeof null`?",
                options: ["'null'", "'object'", "'undefined'", "'number'"],
                correctAnswer: 1,
            },
            {
                question: "Which built-in method removes the last element from an array?",
                options: ["pop()", "shift()", "remove()", "delete()"],
                correctAnswer: 0,
            },
            {
                question: "What will `Boolean(0)` return?",
                options: ["true", "false", "undefined", "NaN"],
                correctAnswer: 1,
            },
            {
                question: "Which operator is used to compare both value and type?",
                options: ["==", "=", "===", "!="],
                correctAnswer: 2,
            },
            {
                question: "Which keyword is used to exit a loop early?",
                options: ["stop", "exit", "break", "end"],
                correctAnswer: 2,
            },
            {
                question: "Which method joins all array elements into a string?",
                options: ["concat()", "join()", "merge()", "combine()"],
                correctAnswer: 1,
            },
            {
                question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
                options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "Math.nearest(7.25)"],
                correctAnswer: 2,
            },
            {
                question: "Which statement is used to handle exceptions?",
                options: ["try/catch", "error/handle", "if/else", "do/catch"],
                correctAnswer: 0,
            }
        ]
    },
    {
        category: "sql",
        questions: [{
                question: "What does SQL stand for?",
                options: ["Structured Question Language", "Strong Question Language", "Structured Query Language", "Stylish Query Language"],
                correctAnswer: 2,
            },
            {
                question: "Which SQL statement is used to extract data from a database?",
                options: ["GET", "SELECT", "EXTRACT", "OPEN"],
                correctAnswer: 1,
            },
            {
                question: "Which SQL clause is used to filter records?",
                options: ["ORDER BY", "WHERE", "GROUP BY", "FILTER"],
                correctAnswer: 1,
            },
            {
                question: "Which keyword is used to sort the result-set in SQL?",
                options: ["SORT", "ORDER", "ORDER BY", "ARRANGE BY"],
                correctAnswer: 2,
            },
            {
                question: "Which SQL statement is used to update data in a database?",
                options: ["MODIFY", "CHANGE", "UPDATE", "SET"],
                correctAnswer: 2,
            },
            {
                question: "Which SQL statement is used to delete data from a table?",
                options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
                correctAnswer: 2,
            },
            {
                question: "Which function is used to count rows in SQL?",
                options: ["SUM()", "TOTAL()", "COUNT()", "ADD()"],
                correctAnswer: 2,
            },
            {
                question: "What is the default sorting order of the ORDER BY clause?",
                options: ["Descending", "Random", "Ascending", "Alphabetical"],
                correctAnswer: 2,
            },
            {
                question: "Which operator is used to check for values within a range?",
                options: ["RANGE", "BETWEEN", "IN", "WITHIN"],
                correctAnswer: 1,
            },
            {
                question: "Which clause is used to group rows with the same values?",
                options: ["ORDER BY", "GROUP BY", "HAVING", "JOIN"],
                correctAnswer: 1,
            },
            {
                question: "Which SQL keyword is used to retrieve only unique values?",
                options: ["UNIQUE", "DISTINCT", "ONLY", "SEPARATE"],
                correctAnswer: 1,
            },
            {
                question: "Which keyword is used to add a new record to a table?",
                options: ["APPEND", "ADD", "INSERT INTO", "INCLUDE"],
                correctAnswer: 2,
            },
            {
                question: "Which SQL keyword is used to create a new table?",
                options: ["NEW TABLE", "MAKE TABLE", "CREATE TABLE", "BUILD TABLE"],
                correctAnswer: 2,
            },
            {
                question: "What does the PRIMARY KEY do?",
                options: ["Uniquely identifies each record", "Links two tables", "Sorts data", "Deletes duplicates"],
                correctAnswer: 0,
            },
            {
                question: "Which keyword is used to remove a table from a database?",
                options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"],
                correctAnswer: 1,
            },
            {
                question: "Which constraint ensures a column cannot have NULL values?",
                options: ["UNIQUE", "NOT EMPTY", "NOT NULL", "REQUIRED"],
                correctAnswer: 2,
            },
            {
                question: "What type of JOIN returns all records when there is a match in either table?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                correctAnswer: 3,
            },
            {
                question: "Which statement is used to change the structure of a table?",
                options: ["UPDATE", "MODIFY", "CHANGE", "ALTER TABLE"],
                correctAnswer: 3,
            },
            {
                question: "Which function returns the highest value in a column?",
                options: ["HIGHEST()", "MAX()", "TOP()", "UPPER()"],
                correctAnswer: 1,
            },
            {
                question: "Which SQL statement is used to create a database?",
                options: ["MAKE DATABASE", "CREATE DATABASE", "NEW DATABASE", "INIT DATABASE"],
                correctAnswer: 1,
            }
        ]
    }
];

let configurationCardElement = document.getElementById("configurationCard");
let questionCardElement = document.getElementById("questionCard");
let startBtnElement = document.getElementById("startBtn");
let nextBtnElement = document.getElementById("nextBtn");
let questionStatusElement = document.getElementById("questionStatus");
let quizResultCardElement = document.getElementById("quizResultCard");
let replayBtnElement = document.getElementById("replayBtn");
let questionsAttemptedTextElement = document.getElementById("questionsAttemptedText");
let currentQuestion = null;
let numberOfQuestions = 5;
let quizCategory = "html";
let questionElement = document.getElementById("question");
let optionsListElement = document.getElementById("optionsList");
const questionsIndexHistory = [];
let correctAnswerCount = 0;

let timeElement = document.getElementById("time");
const QUIZ_TIME_LIMIT = 10;
let timer = null;
let currentTime = QUIZ_TIME_LIMIT;

const highlightCorrectAnswer = () => {
    const correctOption = optionsListElement.querySelectorAll(".option-item")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHtml = `<i class="bi bi-check-circle answer-true"></i>`;
    correctOption.insertAdjacentHTML("beforeend", iconHtml);
};

const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timeElement.textContent = `${currentTime}s`;
};

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timeElement.textContent = `${currentTime}s`;
        if (currentTime <= 0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            optionsListElement.querySelectorAll(".option-item").forEach(option => option.style.pointerEvents = "none");
            nextBtnElement.style.visibility = 'visible';
        }
    }, 1000);
};

const showQuizResult = () => {
    questionCardElement.style.display = "none";
    quizResultCardElement.style.display = "block";
    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly`;
    questionsAttemptedTextElement.innerHTML = resultText;
};
//Handling answer
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? "correct" : "wrong");
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;
    const iconHtml = isCorrect ? `<i class="bi bi-check-circle answer-true"></i>` : `<i class="bi bi-x-circle answer-false"></i>`;
    option.insertAdjacentHTML("beforeend", iconHtml);
    optionsListElement.querySelectorAll(".option-item").forEach(option => option.style.pointerEvents = "none");
    nextBtnElement.style.visibility = 'visible';
};
//Getting random question
const generateRandomQuestion = () => {
    // Finding the category (case-insensitive match)
    const categoryObj = questions.find(eachTopic =>
        eachTopic.category.toLowerCase() === quizCategory.toLowerCase());

    if (!categoryObj) {
        console.error(`No questions found for category: ${quizCategory}`);
        resetQuiz();
        return null;
    }

    const categoryQuestions = categoryObj.questions || [];

    if (categoryQuestions.length === 0) {
        console.error(`No questions available in category: ${quizCategory}`);
        resetQuiz();
        return null;
    }

    // Checking if we've reached the question limit
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        showQuizResult();
        return null;
    }

    // Getting available questions 
    const availableQuestions = categoryQuestions.filter((_, index) =>
        !questionsIndexHistory.includes(index));

    if (availableQuestions.length === 0) {
        showQuizResult();
        return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion;
};
//Displaying random Question
const renderRandomQuestion = () => {
    currentQuestion = generateRandomQuestion();
    if (!currentQuestion) return;
    resetTimer();
    startTimer();
    optionsListElement.innerHTML = "";
    questionStatusElement.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;
    nextBtnElement.style.visibility = 'hidden';
    questionElement.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        const optionItem = document.createElement("li");
        optionItem.classList.add("option-item");
        optionItem.textContent = option;
        optionsListElement.appendChild(optionItem);
        optionItem.addEventListener("click", () => handleAnswer(optionItem, index));
    });
};
//start the Quiz
const startQuiz = () => {
    configurationCardElement.style.display = "none";
    questionCardElement.style.display = "block";

    // Get the active topic item (ensure it's the text content in lowercase)
    const activeTopic = configurationCardElement.querySelector(".topic-item.active");
    quizCategory = activeTopic ? activeTopic.textContent.toLowerCase().trim() : "html";

    // Get the active number item
    const activeNumber = configurationCardElement.querySelector(".number-item.active");
    numberOfQuestions = activeNumber ? parseInt(activeNumber.textContent) : 5;

    // Reset quiz state before starting
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;

    renderRandomQuestion();
};

startBtnElement.addEventListener("click", startQuiz);

document.querySelectorAll(".topic-item, .number-item").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    quizResultCardElement.style.display = "none";
    questionCardElement.style.display = "none";
    configurationCardElement.style.display = "flex";

    //resetting active states
    document.querySelector('.topic-item.active')?.classList.remove('active');
    document.querySelector('.number-item.active')?.classList.remove('active');
    document.querySelector('#topicItem1').classList.add('active');
    document.querySelector('.number-item:first-child').classList.add('active');
};

replayBtnElement.addEventListener("click", resetQuiz);

nextBtnElement.addEventListener("click", renderRandomQuestion);