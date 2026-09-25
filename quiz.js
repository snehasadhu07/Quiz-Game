const questions = [
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

let score= 0;
let currQuestion=0;

let question= document.getElementById('question');
let option= document.getElementById('option');
let start= document.querySelector('#start_btn');
let next= document.querySelector('#nxt');

const showQu = () => {
    question.textContent = questions[currQuestion].question;
    option.innerHTML = "";

    questions[currQuestion].options.forEach(function(op) {

        const button = document.createElement("button");

        button.textContent = op;

        option.appendChild(button);

        // Check the answer
        button.addEventListener("click", () => {

            let userch = button.textContent;
            let answer = questions[currQuestion].answer;

            if (answer === userch) {
                button.style.backgroundColor = "green";
                score++;
                alert("+1");
            } else {
                button.style.backgroundColor = "red";
            }

            // Disable all option buttons
            document.querySelectorAll("#option button").forEach(btn => {
                btn.disabled = true;
            });

        });
    });
};

showQu();

const nxt_btn = ()=>{
    currQuestion++;
        showQu();
    
};



