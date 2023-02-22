const quizDisplay= document.getElementById("display");
let timeLeft=document.querySelector(".time-left");
let quizContainer= document.getElementById("container");
let nextBtn= document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document. querySelector(".score-container");
let restart= document.getElementbyId("restart");
let userScore= document.getElementbyId("user-score");
let startScreen=document.querySelector(".start-screen");
let startButton= document.getElementById("start-button");
let questionCount;
let scoreCount=0;
let count=11;
let countdown;
const quizArray=[{id:"0", question:"Javascript is a/n _____ language?",
 options:["Object-Oriented", "Object-based","Procedural", "None of the Above"], correct:"Object-Oriented" },
{id:"1", question:"Which of the following methods can be used to display data in some form using Javascript?",
 options:["document.write()","console.log()","window.alert()","All of the Above"], correct: "All of the above" },
{id:"2", question:"What keyword is used to check whether a given property is valid or not?",
 options:["in","is in", "exists", "lies"], correct:"in" }
];
function quizCreator(){
    //randomly generates the questions
    quizArray.sort(() => Math.random()-0.5);
    //randomly generate quiz options
    for (let i of quizArray){
        i.options.sort(() =>Math.random()-0.5);
    
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //Question number
    countOfQuestion.innerHTML= 1+ "of"+ quizArray.length +"Question";
    let question_DIV= document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML =i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
}
}