const questions = [
    {
        question: "What is the national bird of India?",
        answers: [
            { text: "Tiger", correct: false},
            { text: "Elephant", correct: false},
            { text: "Peacock", correct: true},
            { text: "Lion", correct: false},
        ]
    },
    {
        question: "Which animal is the national symbol of India?",
        answers: [
            { text: "Lion", correct: true},
            { text: "Elephant", correct: false},
            { text: "Tiger", correct: false},
            { text: "Camel", correct: false},
        ]
    },
    {
        question: " What is the national flower of India?",
        answers: [
            { text: "Sunflower", correct: false},
            { text: "Rose", correct: false},
            { text: "Lotus", correct: true},
            { text: "Jasmine", correct: false},
        ]
    },
    {
        question: "Which river is often referred to as the 'Ganga of the South' and is one of the major rivers in India?",
        answers: [
            { text: "Yamuna", correct: false},
            { text: "Brahmaoutra", correct: false},
            { text: "Godavari", correct: true},
            { text: "Ganges", correct: false},
        ]
    },
    {
        question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
        answers: [
            { text: " Rabindranath Tagore", correct: true},
            { text: "Mahatma Gandhi", correct: false},
            { text: "Jawaharlal Nehru", correct: false},
            { text: "Subhas Chandra Bose", correct: false},
        ]
    },
    {
        question: " What is the national emblem of India called?",
        answers: [
            { text: "Ashoka Pillar", correct: true},
            { text: " Taj Mahal", correct: false},
            { text: "Red Fort", correct: false},
            { text: "Qutub Minar", correct: false},
        ]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Panjab", correct: true},
            { text: "Rajasthan", correct: false},
            { text: "Uttar Pradesh", correct: false},
            { text: "Maharastra", correct: false},
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Rupee", correct: true},
            { text: "Dollar", correct: false},
            { text: "Euro", correct: false},
            { text: "Yen", correct: false},
        ]
    },
    {
        question: "Which Indian festival is known as the 'Festival of Lights'?",
        answers: [
            { text: "Diwali", correct: true},
            { text: "Holi", correct: false},
            { text: "Eid", correct: false},
            { text: "Christmus", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: "Sardar Patel", correct: false},
            { text: "Bhagat Singh", correct: false},
            { text: "Mahatma Gandhi", correct: true},
            { text: "Jawaharlal Nehru", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}



function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
