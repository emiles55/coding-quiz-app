const quizArray=[{question:"Javascript is a/n _____ language?",
 options:["Object-Oriented", "Object-based","Procedural", "None of the Above"], correct:"Object-Oriented" },
{question:"Which of the following methods can be used to display data in some form using Javascript?",
 options:["document.write()","console.log()","window.alert()","All of the Above"], correct: "All of the above" },
{question:"What keyword is used to check whether a given property is valid or not?",
 options:["in","is in", "exists", "lies"], correct:"in" }
];
const startButton=document.getElementById('start-button');
const nextButton= document.getElementById('next-button');
const restartButton= document.getElementById('restart-button');
const buttonGrid=document.getElementById('questionAndAnswers');
const timer=document.getElementById('timer');
const totalTime=document.getElementById('time-left');
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startQuiz);
let countDown=60;
let randomQuestions;
let questionIndex;
const questionElement=document.getElementById('questionDisplay');
console.log(questionElement);
const optionsElement=document.getElementById('answer-buttons');


function startQuiz() {
    setInterval(updateCountDown, 1000)
    randomQuestions=quizArray.sort(() => Math.random()-0.5);
    questionIndex=0;
    startButton.classList.add('hide');
    restartButton.classList.remove("hide");
    nextButton.classList.remove('hide');
    buttonGrid.classList.remove('hide');
    timer.classList.remove('hide');
    nextQuestion()

}
function nextQuestion(){
applyQuestion(randomQuestions[questionIndex])

}
function applyQuestion(question){
questionElement.innerText=question.question;
question.options.forEach(options => {
    const createButton=document.createElement('button');
    createButton.innerText=options.text;
    buttonGrid.classList.add('answer-button');
    optionsElement.appendChild(createButton);
}
)
}
function choseAnswer(){

}
function updateCountDown(){
    totalTime.innerHTML=countDown.toString()+" seconds";
    countDown--;
    if (countDown==0){
        totalTime.innerHTML="Time's up!"
        clearInterval(setInterval);
    }
}