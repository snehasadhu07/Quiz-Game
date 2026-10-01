const questions1 = [
    {
        question: "Which language is used to structure a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is used to make webpages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        answer: "//"
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "add()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "remove()"],
        answer: "pop()"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", "===", "!="],
        answer: "="
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "method", "func", "define"],
        answer: "function"
    },
    {
    question: "Which keyword is used to define a function?",
    options: ["function", "method", "func", "define"],
    answer: "function"
},
{
    question: "Which keyword is used to declare a variable that can be reassigned?",
    options: ["let", "const", "varies", "define"],
    answer: "let"
},
{
    question: "Which keyword is used to declare a constant variable?",
    options: ["let", "var", "const", "constant"],
    answer: "const"
},
{
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//"
},
{
    question: "Which symbol is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: "==="
},
{
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "add()"],
    answer: "push()"
},
{
    question: "Which method removes the last element from an array?",
    options: ["remove()", "pop()", "delete()", "shift()"],
    answer: "pop()"
},
{
    question: "Which method removes the first element from an array?",
    options: ["pop()", "remove()", "shift()", "delete()"],
    answer: "shift()"
},
{
    question: "Which method adds an element to the beginning of an array?",
    options: ["push()", "unshift()", "addFirst()", "prepend()"],
    answer: "unshift()"
},
{
    question: "Which operator is used for addition?",
    options: ["+", "-", "*", "/"],
    answer: "+"
},
{
    question: "Which operator is used for logical AND?",
    options: ["||", "&&", "!", "&"],
    answer: "&&"
},
{
    question: "Which operator is used for logical OR?",
    options: ["&&", "||", "!", "|"],
    answer: "||"
},
{
    question: "Which operator is used for logical NOT?",
    options: ["!", "not", "&&", "||"],
    answer: "!"
},
{
    question: "What is the output of typeof 'Hello'?",
    options: ["text", "String", "string", "char"],
    answer: "string"
},
{
    question: "What is the output of typeof 25?",
    options: ["integer", "number", "float", "numeric"],
    answer: "number"
},
{
    question: "Which value represents an empty value intentionally?",
    options: ["undefined", "null", "empty", "none"],
    answer: "null"
},
{
    question: "Which method is used to print output in the browser console?",
    options: ["console.print()", "console.log()", "print()", "log.console()"],
    answer: "console.log()"
},
{
    question: "Which method is used to convert a string to an integer?",
    options: ["parseInt()", "toInteger()", "int()", "parseNumber()"],
    answer: "parseInt()"
},
{
    question: "Which method converts a string into a floating-point number?",
    options: ["parseFloat()", "parseDecimal()", "toFloat()", "float()"],
    answer: "parseFloat()"
},
{
    question: "Which property returns the length of a string?",
    options: ["size", "length", "count", "characters"],
    answer: "length"
},
{
    question: "Which method converts a string to uppercase?",
    options: ["upperCase()", "toUpperCase()", "uppercase()", "makeUpper()"],
    answer: "toUpperCase()"
},
{
    question: "Which method converts a string to lowercase?",
    options: ["lowerCase()", "toLowerCase()", "lower()", "makeLower()"],
    answer: "toLowerCase()"
},
{
    question: "Which method is used to find the position of a value in an array?",
    options: ["findIndex()", "indexOf()", "position()", "search()"],
    answer: "indexOf()"
},
{
    question: "Which method joins array elements into a string?",
    options: ["combine()", "join()", "merge()", "concatArray()"],
    answer: "join()"
},
{
    question: "Which method is used to combine two or more arrays?",
    options: ["merge()", "join()", "concat()", "combine()"],
    answer: "concat()"
},
{
    question: "Which loop is commonly used when the number of iterations is known?",
    options: ["for", "while", "do-while", "repeat"],
    answer: "for"
},
{
    question: "Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
},
{
    question: "Which statement is used to make a decision?",
    options: ["if", "check", "when", "condition"],
    answer: "if"
},
{
    question: "Which statement is used to execute a block when the if condition is false?",
    options: ["otherwise", "else", "default", "except"],
    answer: "else"
},
{
    question: "Which keyword is used to exit a loop?",
    options: ["stop", "exit", "break", "end"],
    answer: "break"
},
{
    question: "Which keyword skips the current iteration of a loop?",
    options: ["skip", "continue", "pass", "next"],
    answer: "continue"
},
{
    question: "Which keyword is used to return a value from a function?",
    options: ["send", "return", "output", "value"],
    answer: "return"
},
{
    question: "Which object is used to interact with the HTML document?",
    options: ["BOM", "DOM", "JSON", "HTMLObject"],
    answer: "DOM"
},
{
    question: "Which method selects an element by its ID?",
    options: ["getElementById()", "getById()", "selectId()", "queryId()"],
    answer: "getElementById()"
},
{
    question: "Which method selects the first element matching a CSS selector?",
    options: ["querySelector()", "select()", "getSelector()", "findElement()"],
    answer: "querySelector()"
},
{
    question: "Which event occurs when a user clicks an element?",
    options: ["onpress", "onclick", "onhover", "onselect"],
    answer: "onclick"
},
{
    question: "Which keyword refers to the current object?",
    options: ["self", "current", "this", "object"],
    answer: "this"
},
{
    question: "Which data structure stores key-value pairs?",
    options: ["Array", "Object", "String", "Number"],
    answer: "Object"
},
{
    question: "Which method converts a JavaScript object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
    answer: "JSON.stringify()"
},
{
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()"
},
    {
        question: "Which method is used to select an element by its ID?",
        options: [
            "getElementById()",
            "getElementByClass()",
            "queryById()",
            "selectId()"
        ],
        answer: "getElementById()"
    }
];
function getRandomnumber(max){
    return Math.floor(Math.random() * max);
}

let questions=[];

for(let i=1; i<=10; i++){
    let currQuestion= getRandomnumber(50);
    questions.push(questions1[currQuestion]);
}



let currQuestion = 0;
let score = 0;

let question = document.getElementById("question");
let option = document.getElementById("option");
let start = document.querySelector("#start_btn");
let next = document.querySelector("#nxt");




// START BUTTON

if (start) {

    start.addEventListener("click", () => {

        score = 0;
        // currQuestion = 0;

        localStorage.removeItem("score");

        location.href = "question.html";

    });

}


// QUESTIONS PAGE

if (question && option && next) {

    const showQu = () => {

        question.textContent =
            questions[currQuestion].question;

        option.innerHTML = "";


        questions[currQuestion].options.forEach((op) => {

            const button = document.createElement("button");

            button.textContent = op;

            option.appendChild(button);


            // CHECK ANSWER

            button.addEventListener("click", () => {

                let userAnswer = button.textContent;
                let correctAnswer = questions[currQuestion].answer;


                if (userAnswer === correctAnswer) {

                    button.style.backgroundColor = "green";

                    score++;

                } else {

                    button.style.backgroundColor = "red";

                    // Show correct answer
                    document
                        .querySelectorAll("#option button")
                        .forEach((btn) => {

                            if (btn.textContent === correctAnswer) {
                                btn.style.backgroundColor = "green";
                            }

                        });

                }


                // Disable all options

                document
                    .querySelectorAll("#option button")
                    .forEach((btn) => {

                        btn.disabled = true;

                    });

            });

        });

    };


    showQu();


    // NEXT BUTTON

    next.addEventListener("click", () => {
            if (currQuestion === questions.length - 1) {

                localStorage.setItem("score", score);

                location.href = "result.html";

            } else {

                currQuestion++;

                showQu();

            }
        

    });

}