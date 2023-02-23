const startButton=document.getElementById('start-button');
const nextButton= document.getElementById('next-button');
const restartButton= document.getElementById('restart-button');
const buttonGrid=document.getElementById('questionAndAnswers');
const timer=document.getElementById('timer');
const totalTime=document.getElementById('time-left');
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
let countDown=60;
const quizArray=[{id:"0", question:"Javascript is a/n _____ language?",
 options:["Object-Oriented", "Object-based","Procedural", "None of the Above"], correct:"Object-Oriented" },
{id:"1", question:"Which of the following methods can be used to display data in some form using Javascript?",
 options:["document.write()","console.log()","window.alert()","All of the Above"], correct: "All of the above" },
{id:"2", question:"What keyword is used to check whether a given property is valid or not?",
 options:["in","is in", "exists", "lies"], correct:"in" }
];

function startQuiz() {
    setInterval(updateCountDown, 1000)
    quizArray.sort(() => Math.random()-0.5);
    //randomly generate quiz options
    for (let i of quizArray){
        i.options.sort(() =>Math.random()-0.5);
    }

    startButton.classList.add('hide');
    restartButton.classList.remove("hide");
    nextButton.classList.remove('hide');
    buttonGrid.classList.remove('hide');
    timer.classList.remove('hide');
    nextQuestion()

}
function nextQuestion(){


}
function choseAnswer(){

}
function updateCountDown(){
    totalTime.innerHTML=countDown.toString()+"seconds";
    countDown--;
    if (countDown==0){
        totalTime.innerHTML="Time's up!"
        return;
    }
}