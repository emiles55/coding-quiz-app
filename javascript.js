const quizArray=[{question:"Javascript is a/n _____ language?",
 options:[{text:"Object-Oriented", correct: true}, { text: "Object-based", correct: false}
 ,{text: "Procedural", correct: false},{text: "None of the Above", correct: false}], },
{question:"Which of the following methods can be used to display data in some form using Javascript?",
 options:[{text:"document.write()", correct: false},{text: "console.log()",correct: false},{text:"window.alert()", correct: false},
 {text:"All of the Above", correct: true}] },
{question:"What keyword is used to check whether a given property is valid or not?",
 options:[{text: "in", correct: true},{text:"is in", correct: false}, {text:"exists", correct: false},{text:"lies", correct: false}],}
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
    nextQuestion();

}
function nextQuestion(){
buttonReset();
//takes the current question that is randomized
applyQuestion(randomQuestions[questionIndex]);

}
function applyQuestion(question){
questionElement.innerText=question.question;
question.options.forEach(options => {
    const createButton=document.createElement('button');
    createButton.innerText=options.text;
    buttonGrid.classList.add('answer-button');
    createButton.addEventListener('click', choseAnswer);
    optionsElement.appendChild(createButton);
}
)
}
function choseAnswer(event){

}
function buttonReset(){
 //   nextButton.classList.add('hide');
 //   while (optionsElement.firstChild){
 //       optionsElement.removeChild;
   //     (optionsElement.firstChild)
  //  }
}
function updateCountDown(){
    totalTime.innerHTML=countDown.toString()+" seconds";
    countDown--;
    if (countDown==0){
        totalTime.innerHTML="Time's up!"
        clearInterval(setInterval);
    }
}