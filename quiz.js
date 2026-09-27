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
        currQuestion = 0;

        localStorage.removeItem("score");

        location.href = "questions.html";

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