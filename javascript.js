//an array for the questions and answers
const quizArray=[{question:"Javascript is a/n _____ language?",
 options:[{text:"Object-Oriented", correct: true}, { text: "Object-based", correct: false}
 ,{text: "Procedural", correct: false},{text: "None of the Above", correct: false}], },
{question:"Which of the following methods can be used to display data in some form using Javascript?",
 options:[{text:"document.write()", correct: false},{text: "console.log()",correct: false},{text:"window.alert()", correct: false},
 {text:"All of the Above", correct: true}] },
{question:"What keyword is used to check whether a given property is valid or not?",
 options:[{text: "in", correct: true},{text:"is in", correct: false}, {text:"exists", correct: false},{text:"lies", correct: false}],}
];
totalScores=[];
let timerVal;
const rightOrWrong=document.getElementById('right-or-wrong');
let answerChosen;
let correctAnswer;
let scorePoints=0;
const userScores=document.getElementById('user-score');
const startButton=document.getElementById('start-button');
const nextButton= document.getElementById('next-button');
const restartButton= document.getElementById('restart-button');
const buttonGrid=document.getElementById('questionAndAnswers');
const timer=document.getElementById('timer');
const totalTime=document.getElementById('time-left');
startButton.addEventListener('click', startQuiz);
let countDown=20;
let randomQuestions;
let questionIndex;
let totalScoresStringify;
let totalScoresDestringify;
const questionElement=document.getElementById('questionDisplay');
console.log(questionElement);
const optionsElement=document.getElementById('answer-buttons');


function startQuiz() {
    timerVal=setInterval(updateCountDown, 1000);
    //sorts the questions
    randomQuestions=quizArray.sort(() => Math.random()-0.5);
    //an index for each question in the array
    questionIndex=0;
    startButton.classList.add('hide');
    buttonGrid.classList.remove('hide');
    timer.classList.remove('hide');
    nextQuestion();
}
function displayScores(){
    clearInterval(timerVal);
    questionElement.innerText="Here are all the scores:";
    scorePoints=scorePoints+countDown;
    totalScores.push(scorePoints);
    console.log(totalScores);
    totalTime.classList.add('hide');
    rightOrWrong.classList.add('hide');
    totalScoresStringify=JSON.stringify(totalScores);
    localStorage.setItem('totalScores', totalScoresStringify);
    totalScoresDestringify=JSON.parse(localStorage.getItem('totalScores'));
    console.log(totalScoresDestringify+"hi");
    for(let i=0; i<totalScoresDestringify-1; i++){
console.log(totalScoresDestringify[i]+"hi");
        var text=document.createTextNode(totalScoresDestringify[i]);
        let userScoreText=document.createTextNode(" User score "+(i+1)+":"+totalScoresDestringify[i]);
        userScores.appendChild(userScoreText);
    }
    userScores.classList.remove('hide');

}
function nextQuestion(){
    buttonReset();
//takes the current question that is randomized
    applyQuestion(randomQuestions[questionIndex]);

}
function applyQuestion(question){
//creates new buttons and adds the text from the quizArray to them
if(questionIndex<=2){
questionElement.innerText=question.question;
question.options.forEach(options => {
    const createButton=document.createElement('button');
    createButton.innerText=options.text;
    createButton.classList.add('answer-button');
    if (options.correct){
        createButton.dataset.correct=options.correct;
    }
    //creates the answer buttons for each answer in the array
    createButton.addEventListener('click', choseAnswer);
    optionsElement.appendChild(createButton);
})
}
else{
    displayScores();
}
}
function choseAnswer(event){
    if(questionIndex<=2){
    answerChosen=event.target;
    correctAnswer=answerChosen.dataset.correct;
    console.log(correctAnswer);
    if(correctAnswer=="true"){
        rightOrWrong.innerHTML="That is correct!";
        rightOrWrong.classList.remove('hide');
        scorePoints=scorePoints+10;
        questionIndex=questionIndex+1;
        nextQuestion();
    }
    if(correctAnswer!="true"){
        rightOrWrong.innerHTML="Sorry, wrong answer!";
        rightOrWrong.classList.remove('hide');
        scorePoints=scorePoints-5;
        questionIndex=questionIndex+1;
        nextQuestion();
    }
}
else{
    scorePoints=scorePoints+countDown;
    displayScores();
}
}
function buttonReset(){
 //removes the extra buttons
 while(optionsElement.firstChild){
    optionsElement.removeChild(optionsElement.firstChild);
 }
}
function updateCountDown(){
    //timer for the quiz
    totalTime.innerHTML=countDown.toString()+" seconds";
    countDown--;
    if (countDown==0){
        totalTime.innerHTML="Time's up!";
        while(optionsElement.firstChild){
            optionsElement.removeChild(optionsElement.firstChild);
         }

        displayScores();
    }

}